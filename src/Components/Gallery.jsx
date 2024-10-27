const Gallery = () => {
    
    //funções para passar pelas setas 
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>{
      return prevIndex === 0 ? banners.length -1 : prevIndex - 1
    })
  }
  const goToslide = (index) => {
    setCurrentIndex(index)
  }
  //autoplay carousel home
  useEffect(() => {
    const interval = setInterval(() => {
      goNext()
    }, 4000)
    return() => clearInterval(interval)
  }, [])
    
    
    
    
    return (
        <div>
            
        </div>
    );
}

export default Gallery;
