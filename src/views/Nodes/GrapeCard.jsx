import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import TokenSymbol from '../../components/TokenSymbol';
import useBanks from '../../hooks/useBanks';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import useStatsForPool from '../../hooks/useStatsForPool';
const GrapeCard = ({}) => {
  const [banks] = useBanks();
  const statsOnPool = useStatsForPool(banks[2]);
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card variant="outlined">
        <CardContent>
          <Box style={{position: 'relative'}}>
            <Box
              style={{
                position: 'absolute',
                right: '5px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TokenSymbol size={32} symbol={'GNODE'} />
            </Box>
            <Typography variant="h5" component="h2">
              Grape Node
            </Typography>
            <Typography color="#322f32">
              Lock your Grapes to earn daily yields<br></br>
              <b>Daily APR:</b> {statsOnPool?.dailyAPR}%<br></br>
              <b>Yearly APR:</b> {statsOnPool?.yearlyAPR}%
            </Typography>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button className="shinyButtonSecondary" component={Link} to={'/nodes/GrapeNode'}>
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GrapeCard;
