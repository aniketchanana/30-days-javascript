const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map( node => node.dataset.time )
    .map( timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce( (total, secs) =>  total + secs );
    let secondLeft = seconds;
    
    const hours = Math.floor(secondLeft / 3600);
    // console.log(hours);
    secondLeft = secondLeft % 3600;

    const minutes = Math.floor(secondLeft / 60);
    secondLeft = secondLeft % 60;

    console.log(hours, minutes, secondLeft);
