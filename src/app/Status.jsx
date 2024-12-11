
    let weatherImage="/sun.png"
    if(props.status==="Bright"){
      weatherImage="/sun.png"
    }else if(props.status==="Clear" && props.style==="mt-60 bg-black"){
      weatherImage="/Moon.png"
    } else if(props.status==="Cloudy"){
      weatherImage="/Clouds.png"
  
    }
    else if(props.status==="Snowy"){
      weatherImage="/DaySnow.png"
    }
    else if(props.status==="Stormy"){
      weatherImage="/DayStorm.png"
    }
    else if(props.status==="Windy"){
      weatherImage="/DayWind.png"
  
    }
    else if(props.status==="Cloudy" && props.style==="mt-60 bg-black"){
      weatherImage="/NightClouds.png"
  
    }
    else if(props.status==="Rainy" && props.style==="mt-60 bg-black"){
      weatherImage="/NightRain.png"
  
    }
    else if(props.status==="Stormy" && props.style==="mt-60 bg-black"){
      weatherImage="/NightStorm.png"
  
    }
    else if(props.status==="Windy" && props.style==="mt-60 bg-black"){
      weatherImage="/NightWind.png"
  
    }
    return(
        <>
        {weatherImage}
        </>
    )
}