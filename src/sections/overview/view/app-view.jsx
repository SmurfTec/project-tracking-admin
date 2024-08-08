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
  const { projectStats } = useProjects();

  const [pieChartData, setPieChartData] = useState([
    { label: '"Offre acceptée"', value: 0 },
    { label: '"Prise de mesure définitive"', value: 0 },
    { label: '"Conception et Validation"', value: 0 },
    { label: '"Production des films Opaq"', value: 0 },
    { label: '"Contrôle Qualité"', value: 0 },
    { label: '"Préparation du chantier"', value: 0 },
    { label: '"Installation"', value: 0 },
    { label: '"Projet terminé"', value: 0 },
  ]);

  useEffect(() => {
    if (projectStats === 'Loading...') return;

    const data = Object.keys(projectStats).map((key) => {
      return {
        label: key,
        value: projectStats[key],
      };
    });
    setPieChartData(data);
  }, [projectStats]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Offre acceptée"
            total={projectStats['Offre acceptée'] || 'Loading...'}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Prise de mesure définitive"
            total={projectStats['Prise de mesure définitive'] || 'Loading...'}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Conception et Validation"
            total={projectStats['Conception et Validation'] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Production des films Opaq"
            total={projectStats['Production des films Opaq'] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Contrôle Qualité"
            total={projectStats['Contrôle Qualité'] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Préparation du chantier"
            total={projectStats['Préparation du chantier'] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Installation"
            total={projectStats['Installation'] || 'Loading...'}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Projet terminé"
            total={projectStats['Projet terminé'] || 'Loading...'}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: pieChartData,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
