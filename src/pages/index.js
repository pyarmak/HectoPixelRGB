import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import SvgCharts from '../svg/SvgCharts';
import SvgCharts2 from '../svg/SvgCharts2';
import SvgCharts3 from '../svg/SvgCharts3';
import HectoPixelHeroImage from '../assets/images/hectopixel.png';

console.log("Chia Test", process.env.GATSBY_FIREBASE_PROJECT_ID)

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-rainbow">
            HectoPixelRGB
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            <strong className="text-red-600 text-2xl">Brighten</strong> <strong className="text-blue-600 text-2xl"><em className="text-green-600">Your</em> World!</strong>
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Are <em className="text-primary-darker">You</em> ready?</p>
        </div>
        <div className="lg:w-1/2">
          <img src={HectoPixelHeroImage} />

        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Smart WiFi Control</p>
              <div className="h-24 flex items-center"><p className="mt-4">Control your HectoPixelRGB through WiFi using WLED and smart home automation software e.g. Home Assistant</p></div>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">100W of Power</p>
              <div className="h-24 flex items-center"><p className="mt-4">Experience the highest power, brightest, RGB LED on the market</p></div>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Temperature Control</p>
              <div className="h-24 flex items-center"><p className="mt-4">Smart temperature managment with built-in temperature sensor and PWM fan control</p></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Deploy. Monitor. Manage.</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The <strong className="text-primary text-2xl">grass</strong> is <strong className="text-primary text-2xl"><em className="text-primary-darker">always</em> greener</strong> with Plottermon. Plottermon allows users to setup, farm, harvest, and control processes hassle-free across thousands of machines all from your favorite browser!
          </p>
        </div>
      }
      secondarySlot={<SvgCharts3 />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design, Plan, Grow Your Farm!
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Monitor <strong className="text-primary text-2xl">everything</strong> from a <strong className="text-primary text-2xl">single dashboard.</strong> Keep track of TD/day, online statuses, errors, team activity, plotting configurations. Remote access from anywhere across the globe.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts2 />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Easy Operation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <strong className="text-primary text-2xl">Manage</strong> and <strong className="text-primary text-2xl">configure</strong> your <strong className="text-primary text-2xl">harvesters</strong> individually! Whether it’s one, or several thousand.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    {/*<section id="stats" className="py-20 lg:pt-32">*/}
    {/*  <div className="container mx-auto text-center">*/}
    {/*    <LabelText className="text-gray-600">Our customers get results</LabelText>*/}
    {/*    <div className="flex flex-col sm:flex-row mt-8 lg:px-24">*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    {/*<section id="testimonials" className="py-20 lg:py-40">*/}
    {/*  <div className="container mx-auto">*/}
    {/*    <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>*/}
    {/*    <div className="flex flex-col md:flex-row md:-mx-3">*/}
    {/*      {customerData.map(customer => (*/}
    {/*        <div key={customer.customerName} className="flex-1 px-3">*/}
    {/*          <CustomerCard customer={customer} />*/}
    {/*        </div>*/}
    {/*      ))}*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    {/* <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Are You ready for Greener Pastures?</h3>
      <p className="mt-8 text-xl font-light">
        To plant a garden, is to believe in tomorrow
      </p>
      <p className="mt-8">
        <Button size="xl">Plot Now</Button>
      </p>
    </section> */}
  </Layout>
);

export default Index;
