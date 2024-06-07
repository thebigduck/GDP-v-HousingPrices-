import React from 'react';
import Image from 'next/image';
import Layout from './layout';
import Divider from './components/Divider';
import Houseprice from './components/Houseprice';
import Debt from './components/Debt';
import Section from './components/Section';
import { Inter } from "next/font/google";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });
const ThemeToggle = dynamic(() => import('./components/themeToggle'), { ssr: false });

export default function Home() { 
  return ( 
  <Layout>
    <Script id="theme-toggle-script" strategy="beforeInteractive">
      {`
        // On page load or when changing themes, best to add inline in 'head' to avoid FOUC
        if (typeof window !== 'undefined') {
          if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      `}
    </Script>
    <div className="flex flex-col items-center justify-center p-12 container mx-auto">
      <div className="w-full max-w-5xl flex flex-col items-center lg:flex-row lg:justify-between px-8">
        <h1 className="text-2xl font-bold text-center mt-6 mb-4 lg:mb-0 lg:text-left lg:flex-1">
          The Struggle for Homeownership: Economic Indicators and Their Personal Impact in an Era of Inflation
        </h1>
        <div className="flex items-center justify-center lg:justify-end lg:flex-1 space-x-4">
          <p className="border border-gray-600 p-4 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30">
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
          <main className="flex items-center justify-center flex-col">
            <ThemeToggle />
          </main>
        </div>
      </div>
      <Divider />
        <div className="prose dark:prose-dark mx-auto mt-8 max-w-5xl text-left">
          <h2 className="section-heading">Introduction</h2>
          <p>
            This investigation casts a spotlight on the personal struggles tied to economic indicators and their direct impact on the US housing market. It probes the stark reality that, as economic figures rise, the dream of homeownership dims for many, given the widening gap between housing prices and average incomes. The exploration delves into historical contexts and contemporary data to shed light on these issues.
          </p>
          <Section title="Historical Context">
            <p>
              The methodological framework of this study involves two key approaches. Firstly, Data Contextualization: Historical data is adjusted for inflation to align with the real-world experiences of individuals. This ensures that the data accurately reflects changes in purchasing power and economic conditions over time. Secondly, an Exploratory Inquiry is conducted to analyze the disconnect between GDP, Real GDP, and the practicality of homeownership. This analysis is mindful of the individual&rsquo;s plight, providing a more nuanced understanding of the economic challenges faced by potential homeowners. The analysis also incorporates federal debt trends, examining how rising debt levels and debt-to-GDP ratios influence economic conditions and homeownership affordability.
            </p>
          </Section>
          <Section title="Data Compilation">
            <p>
              The study examines comprehensive data from the Federal Reserve Economic Data (FRED) database. This data provides crucial insights into the dynamics between economic indicators and homeownership. Key data points include:
            </p>
            <ul className="citations-list">
              <li>
                <a href="https://fred.stlouisfed.org/series/MSPNHSUS" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Median New House Prices.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis. 
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/GDP" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Gross Domestic Product (GDP).&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis. 
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/A939RC0Q052SBEA" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Real GDP per Capita.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis.
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/FYGFGDQ188S" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Debt: Public Debt as % of GDP.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis.
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/GFDEBTN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Debt - Public.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis.
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/FDHBFIN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Debt - International.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis.
              </li>
              <li>
                <a href="https://fred.stlouisfed.org/series/FDHBFRBN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300">&quot;Debt - Federal Reserve.&quot;</a> Federal Reserve Economic Data, Federal Reserve Bank of St. Louis.
              </li>
            </ul>
          </Section>
          <Section title="Methodological Framework">
            <p>
              The methodological framework of this study involves two key approaches. Firstly, Data Contextualization: Historical data is adjusted for inflation to align with the real-world experiences of individuals. This ensures that the data accurately reflects changes in purchasing power and economic conditions over time. Secondly, an Exploratory Inquiry is conducted to analyze the disconnect between GDP, Real GDP, and the practicality of homeownership. This analysis is mindful of the individual&rsquo;s plight, providing a more nuanced understanding of the economic challenges faced by potential homeowners. The analysis also incorporates federal debt trends, examining how rising debt levels and debt-to-GDP ratios influence economic conditions and homeownership affordability.
            </p>
          </Section>
          <Divider />
        <Houseprice />
        <Divider />
        <Debt />
        <Divider />
          <h2 className="section-heading">Key Findings</h2>
            <p>
              The analysis uncovers several key findings that underscore the economic hardships related to homeownership. Firstly, it reveals that economic growth does not necessarily equate to increased wealth or homeownership opportunities for many individuals. The escalating cost of homes is outpacing income growth, pushing the prospect of homeownership out of reach for the average person. Furthermore, the disparity between nominal and Real GDP growth rates highlights how inflation undermines the individual&rsquo;s financial stability and purchasing power, exacerbating the difficulty of affording a home. Additionally, the rising federal debt, particularly the public-held debt, and the increasing debt-to-GDP ratio during crises indicate that economic growth may be debt-financed, adding further pressure on inflation and interest rates.
            </p>

          <h2 className="section-heading mt-6">Projections and Consequences</h2>
            <p>
              The study forecasts a continuing decline in homeownership rates as economic pressures and inflated housing costs persist. This trend suggests that for most individuals, buying a home&mdash;the largest investment of their lives&mdash;is becoming increasingly unattainable. This has significant implications for personal financial stability and long-term wealth generation, potentially widening the gap between economic classes. The ongoing rise in federal debt and its impact on inflation and interest rates further complicate the landscape, making homeownership even less attainable for the average individual.
            </p>
          <h2 className="section-heading mt-6">Final Reflections</h2>
          <p>
            My examination of economic indicators, in relation to housing prices and personal financial health, underscores the urgent need for policies that bridge the gap between economic growth and the real benefits felt by individuals. Effective policy interventions are crucial to ensure that economic advancements translate into tangible improvements in the lives of citizens, particularly in the context of homeownership. Without such measures, the dream of owning a home may remain elusive for many. The integration of federal debt analysis highlights the importance of managing debt levels to maintain economic stability and improve homeownership prospects.
          </p>
 
        <Divider />
        <Section title="Sources">
          <section className="prose dark:prose-dark mx-auto mt-8 text-left">
            <ul className="citations-list">
              <li>
                &quot;Median New House Prices.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/MSPNHSUS" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/MSPNHSUS</a>.
              </li>
              <li>
                &quot;Gross Domestic Product (GDP).&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/GDP" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/GDP</a>.
              </li>
              <li>
                &quot;Real GDP per Capita.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/A939RC0Q052SBEA" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/A939RC0Q052SBEA</a>.
              </li>
              <li>
                &quot;Debt: Public Debt as % of GDP.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/FYGFGDQ188S" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/FYGFGDQ188S</a>.
              </li>
              <li>
                &quot;Debt - Public.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/GFDEBTN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/GFDEBTN</a>.
              </li>
              <li>
                &quot;Debt - International.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/FDHBFIN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/FDHBFIN</a>.
              </li>
              <li>
                &quot;Debt - Federal Reserve.&quot; Federal Reserve Economic Data, Federal Reserve Bank of St. Louis, <a href="https://fred.stlouisfed.org/series/FDHBFRBN" target="_blank" rel="noopener noreferrer" className="text-teal-500 dark:text-teal-300 hover:bold">https://fred.stlouisfed.org/series/FDHBFRBN</a>.
              </li>
            </ul>
          </section>
        </Section>
        </div>
      </div>
    </Layout>
  );
}
