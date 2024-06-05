# Load necessary libraries
install.packages("dplyr")
install.packages("lubridate")
install.packages("readr")
install.packages("ggplot2")
install.packages("purrr")
install.packages("tidyr")
install.packages("plotly")
library(dplyr)
library(lubridate)
library(readr)
library(ggplot2)
library(purrr)
library(tidyr)
library(plotly)

# Load the data
gdp <- read_csv("GDP.csv", col_types = cols())
gdpc1 <- read_csv("GDPC1.csv", col_types = cols())
msprnhsus <- read_csv("MSPNHSUS.csv", col_types = cols())

# Ensure the Date column exists and convert it to Date type if necessary
gdp <- gdp %>%
  rename(Date = 1) %>%  # Assuming the first column is Date
  mutate(Date = as.Date(Date, format = "%Y-%m-%d"))

gdpc1 <- gdpc1 %>%
  rename(Date = 1) %>%  # Assuming the first column is Date
  mutate(Date = as.Date(Date, format = "%Y-%m-%d"))

msprnhsus <- msprnhsus %>%
  rename(Date = 1) %>%  # Assuming the first column is Date
  mutate(Date = as.Date(Date, format = "%Y-%m-%d"))

# Trim data to dates starting from 1963-01-01
gdp <- gdp %>%
  filter(Date >= as.Date("1963-01-01"))

gdpc1 <- gdpc1 %>%
  filter(Date >= as.Date("1963-01-01"))

msprnhsus <- msprnhsus %>%
  filter(Date >= as.Date("1963-01-01"))

# Merge data frames
data_combined <- purrr::reduce(list(gdp, gdpc1, msprnhsus), full_join, by = "Date")

# Remove rows with NA values
data_combined <- data_combined %>%
  drop_na()

# Define a scaling factor for the secondary axis
scale_factor <- max(data_combined$GDP, na.rm = TRUE) / max(data_combined$MSPNHSUS, na.rm = TRUE)

# Add scaled_msprnhsus as a column for comparison
data_combined <- data_combined %>%
  mutate(
    scaled_msprnhsus = MSPNHSUS * scale_factor
  )

# Add columns to reflect conditions for coloring
data_combined <- data_combined %>%
  mutate(
    HomePriceColor = case_when(
      scaled_msprnhsus >= GDP & scaled_msprnhsus >= GDPC1 ~ "red",  # Crosses both GDP and inflation-adjusted GDP
      scaled_msprnhsus >= GDPC1 ~ "orange",                        # Crosses inflation-adjusted GDP
      scaled_msprnhsus >= GDP ~ "green",                           # Crosses GDP
      TRUE ~ "blue"                                                # Default color
    ),
    hover_text_bar = paste("Date:", Date, "<br>Home Price:", scales::dollar(MSPNHSUS), "<br>GDP:", scales::dollar(GDP), "<br>Inflation-adjusted GDP:", scales::dollar(GDPC1)),
    hover_text_gdp = paste("Date:", Date, "<br>GDP:", scales::dollar(GDP)),
    hover_text_gdpc1 = paste("Date:", Date, "<br>Inflation-adjusted GDP:", scales::dollar(GDPC1))
  )

# Plot with separate y-axes and conditional coloring
p <- ggplot(data_combined, aes(x = Date)) +
  geom_col(aes(y = MSPNHSUS * scale_factor, fill = HomePriceColor), alpha = 0.7, color = "black", position = "identity", show.legend = FALSE) +
  geom_line(aes(y = GDP, color = "GDP"), linewidth = 1, show.legend = TRUE) +
  geom_line(aes(y = GDPC1, color = "Inflation-adjusted GDP"), linewidth = 1, show.legend = TRUE) +
  scale_y_continuous(
    name = "GDP and Inflation-adjusted GDP Values",
    labels = scales::dollar,
    sec.axis = sec_axis(~ . / scale_factor, name = "Avg Home Price (in dollars)", labels = scales::dollar)
  ) +
  labs(title = "Overlay Plot of GDP, Inflation-adjusted GDP, and Avg Home Price with Histogram",
       x = "Date",
       color = "Legend") +
  scale_fill_manual(values = c("blue" = "blue", "green" = "green", "orange" = "orange", "red" = "red"), guide = "none") +
  scale_color_manual(values = c("GDP" = "blue", "Inflation-adjusted GDP" = "red")) +
  theme_grey()

# Convert to interactive plot with custom tooltips
p_interactive <- ggplotly(p, tooltip = "text") %>%
  layout(hovermode = "x unified")

# Customize the tooltip content
for (i in seq_along(p_interactive$x$data)) {
  if (p_interactive$x$data[[i]]$type == "bar") {
    p_interactive$x$data[[i]]$hoverinfo <- "text"
    p_interactive$x$data[[i]]$text <- data_combined$hover_text_bar
  } else if (grepl("GDP", p_interactive$x$data[[i]]$name)) {
    p_interactive$x$data[[i]]$hoverinfo <- "skip"
  } else if (grepl("Inflation-adjusted GDP", p_interactive$x$data[[i]]$name)) {
    p_interactive$x$data[[i]]$hoverinfo <- "skip"
  }
}

# Display the interactive plot in the Viewer
print(p_interactive)

# Display the interactive plot in an external browser
htmlwidgets::saveWidget(p_interactive, "interactive_plot.html")
browseURL("interactive_plot.html")

# Export data for Tableau Public
write_csv(data_combined, "data_for_tableau.csv")
