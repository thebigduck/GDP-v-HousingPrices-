import React from 'react';
import Divider from './components/Divider';
import Image from 'next/image';
import Houseprice from './components/Houseprice';
import Debt from './components/Debt';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 container">
      <div className="w-full max-w-5xl flex flex-col items-center lg:flex-row lg:justify-between px-8">
        <h1 className="text-4xl font-bold text-center mt-6 mb-4 lg:mb-0 lg:text-left lg:flex-1">
          The Struggle for Homeownership: Economic Indicators and Their Personal Impact in an Era of Inflation
        </h1>
        <div className="flex items-center justify-center lg:justify-end lg:flex-1 space-x-4">
          <p className="border border-gray-600 from-zinc-200 p-4 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30">
            By: Anderson McCord
          </p>
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/andersonmccord/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm">LinkedIn:</span>
            <Image
              src="/linkedinpic.png"
              alt="LinkedIn Logo"
              width={50}
              height={12}
              priority
            />
          </a>
        </div>
      </div>
      <Divider />
      <div className="prose dark:prose-dark mx-auto mt-8 max-w-5xl">
        <section className="mb-8 mt-4">
          <h3 className="text-2xl font-semibold">Introduction</h3>
            <p>
              This investigation casts a spotlight on the personal struggles tied to economic indicators and their direct impact on the US housing market. It probes the stark reality that, as economic figures rise, the dream of homeownership dims for many, given the widening gap between housing prices and average incomes. The exploration delves into historical contexts and contemporary data to shed light on these issues.
            </p>
          </section>
        
        <section className="mb-8 mt-4">
          <h3 className="text-xl font-semibold">Historical Context</h3>
            <p>
              The methodological framework of this study involves two key approaches. Firstly, Data Contextualization: Historical data is adjusted for inflation to align with the real-world experiences of individuals. This ensures that the data accurately reflects changes in purchasing power and economic conditions over time. Secondly, an Exploratory Inquiry is conducted to analyze the disconnect between GDP, Real GDP, and the practicality of homeownership. This analysis is mindful of the individual’s plight, providing a more nuanced understanding of the economic challenges faced by potential homeowners. The analysis also incorporates federal debt trends, examining how rising debt levels and debt-to-GDP ratios influence economic conditions and homeownership affordability.
            </p>
        </section>
        <section className="mb-8 mt-4">
          <h3 className="text-xl font-semibold">Data Compilation</h3>
            <p>
              The study examines comprehensive data from the Federal Reserve Economic Data (FRED) database. This data provides crucial insights into the dynamics between economic indicators and homeownership. Key data points include:
            </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://fred.stlouisfed.org/series/MSPNHSUS" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Median New House Prices</a>: These figures reflect the increasing difficulty for individuals to afford homes, highlighting the disparity between house prices and average incomes.
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/GDP" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">GDP</a>: This indicator, while showing economic growth, often masks the stagnating purchasing power of the average citizen.
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/A939RC0Q052SBEA" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Real GDP per Capita</a>: When adjusted for inflation, this metric reveals the true economic standing of individuals, providing a clearer picture of financial health and stability.
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/FYGFGDQ188S" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Debt: Public Debt as % of GDP</a>: Public debt can be an indicator of how much public spending is funded by borrowing instead of taxes
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/GFDEBTN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Debt - Public</a>: This includes all U.S. Treasury securities held by domestic and international investors, including individuals, corporations, and state or local governments. This category has shown the most substantial growth, particularly after economic crises.
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/FDHBFIN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Debt - International</a>: This category includes debt held by foreign governments and international investors. It reflects the global trust in U.S. financial stability but also indicates the country&apos;s reliance on foreign investment.When adjusted for inflation, this metric reveals the true economic standing of individuals, providing a clearer picture of financial health and stability.
            </li>
            <li>
              <a href="https://fred.stlouisfed.org/series/FDHBFRBN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">Debt - Federal Reserve</a>: Debt held by the Federal Reserve includes securities bought as part of monetary policy operations. This debt type can influence interest rates and liquidity in the financial system.
            </li>
          </ul>
        </section>
        <section className="mb-8 mt-4">
          <h3 className="text-xl font-semibold">Methodological Framework</h3>
          <p>
            The methodological framework of this study involves two key approaches. Firstly, Data Contextualization: Historical data is adjusted for inflation to align with the real-world experiences of individuals. This ensures that the data accurately reflects changes in purchasing power and economic conditions over time. Secondly, an Exploratory Inquiry is conducted to analyze the disconnect between GDP, Real GDP, and the practicality of homeownership. This analysis is mindful of the individual’s plight, providing a more nuanced understanding of the economic challenges faced by potential homeowners. The analysis also incorporates federal debt trends, examining how rising debt levels and debt-to-GDP ratios influence economic conditions and homeownership affordability.
          </p>
        </section>
        <section className="mb-8 mt-4">
          <h2 className="text-2xl underline font-semibold">Key Findings</h2>
          <p>
            The analysis uncovers several key findings that underscore the economic hardships related to homeownership. Firstly, it reveals that economic growth does not necessarily equate to increased wealth or homeownership opportunities for many individuals. The escalating cost of homes is outpacing income growth, pushing the prospect of homeownership out of reach for the average person. Furthermore, the disparity between nominal and Real GDP growth rates highlights how inflation undermines the individual’s financial stability and purchasing power, exacerbating the difficulty of affording a home. Additionally, the rising federal debt, particularly the public-held debt, and the increasing debt-to-GDP ratio during crises indicate that economic growth may be debt-financed, adding further pressure on inflation and interest rates.
          </p>
        </section>
        <section className="mb-8 mt-4">
          <h2 className="text-xl font-semibold">Projections and Consequences</h2>
          <p>
            The study forecasts a continuing decline in homeownership rates as economic pressures and inflated housing costs persist. This trend suggests that for most individuals, buying a home—the largest investment of their lives—is becoming increasingly unattainable. This has significant implications for personal financial stability and long-term wealth generation, potentially widening the gap between economic classes. The ongoing rise in federal debt and its impact on inflation and interest rates further complicate the landscape, making homeownership even less attainable for the average individual.
          </p>
        </section>
        <section className="mb-8 mt-4">
          <h2 className="text-xl font-semibold">Final Reflections</h2>
          <p>
            My examination of economic indicators, in relation to housing prices and personal financial health, underscores the urgent need for policies that bridge the gap between economic growth and the real benefits felt by individuals. Effective policy interventions are crucial to ensure that economic advancements translate into tangible improvements in the lives of citizens, particularly in the context of homeownership. Without such measures, the dream of owning a home may remain elusive for many. The integration of federal debt analysis highlights the importance of managing debt levels to maintain economic stability and improve homeownership prospects.
          </p>
        </section>
      </div>
      <Divider />
        <Houseprice />
      <Divider />
        <Debt />
      <Divider />
      <section className="prose dark:prose-dark mx-auto mt-8">
        <h2 className="text-2xl underline mb-8 mt-4 font-semibold">Sources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://fred.stlouisfed.org/series/MSPNHSUS" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/MSPNHSUS</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/GDP" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/GDP</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/A939RC0Q052SBEA" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/A939RC0Q052SBEA</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/FDHBFIN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/FDHBFIN</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/GFDEGDQ188S" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/GFDEGDQ188S</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/GFDEBTN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/GFDEBTN</a>
          </li>
          <li>
            <a href="https://fred.stlouisfed.org/series/FDHBFRBN" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:bold">https://fred.stlouisfed.org/series/FDHBFRBN</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
