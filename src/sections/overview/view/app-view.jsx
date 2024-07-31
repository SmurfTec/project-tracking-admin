
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';
import { useProjects } from 'src/Context/ProjectsContext';
import { useState } from 'react';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function AppView() {
  const {projectStats} = useProjects();

  const [pieChartData, setPieChartData] = useState([
      { label: '"Offer Accepted"', value: 0 },
      { label: '"Final Measurement"', value: 0 },
      { label: '"Design and Validation"', value: 0 },
      { label: '"Production of Smart Films"', value: 0 },
      { label: '"Quality Control"', value: 0 },
      { label: '"Site Preparation"', value: 0 },
      { label: '"Installation"', value: 0 },
      { label: '"Project Completed"', value: 0 },
  ])

  useEffect(() => {
    if(projectStats === 'Loading...') return;

    const data = Object.keys(projectStats).map((key) => {
      return {
        label: key,
        value: projectStats[key]
      }
    })
    setPieChartData(data)
  }, [projectStats])
  
  
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Offer Accepted"
            total={projectStats["Offer Accepted"] || 'Loading...'}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Final Measurement"
            total={projectStats["Final Measurement"] || 'Loading...'}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Design and Validation"
            total={projectStats["Design and Validation"] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Production of Smart Films"
            total={projectStats["Production of Smart Films"] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Quality Control"
            total={projectStats["Quality Control"] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Site Preparation"
            total={projectStats["Site Preparation"] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Installation"
            total={projectStats["Installation"] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Project Completed"
            total={projectStats["Project Completed"] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: pieChartData
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
