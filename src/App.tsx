import './App.css'
import Header from './components/Header'
import GradientCircle from './components/GradientCircle'
import Spline from '@splinetool/react-spline';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/7xbjlBkVVxdgT4gV/scene.splinecode" />
      </div>
      <GradientCircle />
      <Header />
      <SocialLinks />
      <Footer />
    </>
  )
}


export default App
