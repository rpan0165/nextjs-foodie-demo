import '../styles/circularsections.css';

function CircularSection() {
    const circles = [
      {
        id: 1,
        image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/Circle-Images-for-Foodie-1.png',
        text: 'Circle 1 Text',
        link: '/circle1',
      },
      {
        id: 2,
        image: '/circle2.png',
        text: 'Circle 2 Text',
        link: '/circle2',
      },
      // Add more circle objects here as needed
    ];
  
    return (
        <>
        <h2 className="heading-circles text-4xl font-bold">Great Ways To Explore Sysco Foodie</h2>
        <br/>
        <br/>
        <div className="container-fluid">
        <div className="row">
          <div class="col">
           <img className='' src="https://foodie.sysco.com/wp-content/uploads/2020/06/Circle-Images-for-Foodie-1.png"></img>
            <h3>Tips & Trends</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
           <img className="" src="https://foodie.sysco.com/wp-content/uploads/2020/06/Circle-Images-for-Foodie-1.png"></img>
            <h3>Tips & Trends</h3>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default CircularSection;