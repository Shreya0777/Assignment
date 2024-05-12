import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';
import ChartComponent from './ChartComponent';
import TabsAndList from './TabandList';


const App = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://api.inopenapp.com/api/v1/dashboardNew', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MjcsImlhdCI6MTY3NDU1MDQ1MH0.dCkW0ox8tbjJA2GgUx2UEwNlbTZ7Rr38PVFJevYcXFI'
          }
        });
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApiData();
  }, []);
console.log(apiData)
  return (
    <div>
      {apiData && (
        <>
          <Greeting userName={apiData.userName} />
          <ChartComponent chartLabels={apiData.chartLabels} chartData={apiData.data.overall_url_chart
} />
          <TabsAndList topLinks={apiData.data.top_links} recentLinks={apiData.data.recent_links} />
        </>
      )}
    </div>
  );
};

export default App;
