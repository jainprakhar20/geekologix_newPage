import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import TabsExample from '@/components/TabsExample';

export default function Home() {
  return (
    
      <div className="background">

        <div className='topDiv'>
          <h2 className='header'>
            Find Your Perfect Plan
          </h2>

          <p className='paragraph'>
            Master the market with our Awesome Plan: access real-time data, educational resources, and build your trading foundation with confidence.
          </p>
        </div>

        <div className='d-flex justify-content-center align-items-center pb-5'>
          <TabsExample />
        </div>

      </div>
   

  );
}
