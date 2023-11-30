import { Tabs } from 'keep-react';

const About = () => {
    return (
        <div className=' lg:max-w-7xl mx-auto mt-5'>
          <h2 className='text-5xl text-center mt-5 mb-4 font-mono font-bold'>About Us</h2>
            <Tabs aria-label="tabs" style="underline" borderPosition="bottom" className='max-w-7xl mx-auto'>
      <Tabs.Item title="Our Commitment" >
        <p className='text-center text-xl'>We understand the challenges that the middle class often faces when it comes to investing in fitness and wellness. That's why we've made it our mission to provide top-notch fitness tracking technology at affordable prices. At Fitness Tracker, we're breaking down barriers, ensuring that cutting-edge health monitoring is within reach for every budget.</p>
      </Tabs.Item>
      <Tabs.Item title="Quality for Every Body">
        <p className='text-center text-xl'>Whether you're a fitness enthusiast or just starting your wellness journey, we have a solution tailored to you. Our range of fitness trackers is designed with precision and care, delivering accurate data to support your goals. We believe that everyone, regardless of their budget, deserves access to the tools that can make a significant impact on their health and well-being.</p>
      </Tabs.Item>
      <Tabs.Item title="Empowering Healthy Lifestyles">
        <p className='text-center text-xl'>At Fitness Tracker, we go beyond selling devices. We're here to inspire and support you on your path to a healthier, more active life. Our user-friendly fitness trackers are equipped with features that cater to your individual needs, providing insights and motivation to help you stay on track.</p>
      </Tabs.Item>
      <Tabs.Item  title="Message">
        <p className='text-center text-xl'>
        Join us at Fitness Tracker – where health and affordability converge. Your well-being is our priority, and we're dedicated to making fitness accessible to every middle-class individual, one step at a time.
        </p>
      </Tabs.Item>
    </Tabs>
        </div>
    );
};

export default About;