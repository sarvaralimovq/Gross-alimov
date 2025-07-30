import React, { useEffect } from 'react'
import HomTop from '../../companents/HomeTop/HomTop'

function Home() {
   useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-show');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const animatedItems = document.querySelectorAll('.scroll-left, .scroll-right, .scroll-up');
  
      animatedItems.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
    <div className='Home '>
      
      <HomTop/>
      
    </div>
    
  )
}

export default Home