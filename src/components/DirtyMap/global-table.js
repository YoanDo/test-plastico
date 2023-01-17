import React from 'react';
import Grid from '@mui/material/Grid';
import { PieChart } from 'react-minimal-pie-chart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import PropTypes from 'prop-types';
// import { PropTypes } from "prop-types";

const BasicTable = (props) => {
  const { data, onClose } = props;
  const keys = [];
  const percentage = (partialValue, totalValue) =>
    (100 * partialValue) / totalValue;
  const generateValue = () => {
    Object.keys(data).map((key, i) => {
      if (key === 'id' || key === 'code' || key === 'importance') {
        return;
      }
      keys.push(key);
    });
  };

  return (
    <Grid sx={{ pt: 3, pl: 2, m: 'auto' }}>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          pr: '1rem',
          fontSize: 'initial',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        onClick={() => onClose()}
      >
        X
      </Box>
      {generateValue()}
      <>
        {keys.map((key) => {
          const label = key.replaceAll('_', ' ');
          if (key !== 'trashes_by_type') {
            return (
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography variant="h6" sx={{ p: 0.5 }}>
                  {' '}
                  {label} :
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{ p: 0.5, fontWeight: 'bold' }}
                >
                  {typeof data[key] === 'number'
                    ? Math.round(data[key])
                    : data[key]}
                </Typography>
              </Box>
            );
          }
          const trashTypeKey = [];
          const trashByType = JSON.parse(data[key]);
          trashByType.map((el) => {
            Object.keys(el).map((key, i) => {
              let color;
              switch (key) {
                case 'Insulating material':
                  color = 'yellow';
                  break;
                case 'Bottle-shaped':
                  color = 'red';
                  break;
                case 'Can-shaped':
                  color = 'blue';
                  break;
                case 'Sheet / tarp / plastic bag / fragment':
                  color = 'green';

                  break;
                default:
              }
              trashTypeKey.push({ title: key, value: el[key], color });
            });
          });
          const initialValue = 0;
          const somme = trashTypeKey.reduce(
            (total, currentValue) => total + currentValue.value,
            initialValue
          );

          return (
            <div>
              <Typography variant="h6" sx={{ p: 1 }}>
                {' '}
                {label} :
              </Typography>
              <Box
                sx={{
                  width: '15rem',
                  margin: 'auto'
                }}
              >
                <PieChart
                  label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                      x={x}
                      y={y}
                      dx={dx}
                      dy={dy}
                      dominantBaseline="central"
                      textAnchor="middle"
                      fontSize="x-small"
                    >
                      {`${Math.round(percentage(dataEntry.value, somme))} %`}
                    </text>
                  )}
                  data={trashTypeKey}
                />
              </Box>
              <Box sx={{ marginBottom: '1rem' }}>
                <Box sx={{ marginBottom: '1rem' }}>Legend</Box>
                {trashTypeKey.map((el) => (
                  <Box
                    sx={{
                      display: 'flex'
                    }}
                  >
                    <Box
                      sx={{
                        height: '1rem',
                        width: '1rem',
                        backgroundColor: el.color,
                        marginBottom: '1rem'
                      }}
                    />
                    <Box
                      sx={{
                        height: '1rem',
                        paddingLeft: '1rem'
                      }}
                    >
                      {el.title} : {el.value}
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
          );
        })}
      </>
    </Grid>
  );
};
export default BasicTable;

// BasicTable.propTypes = {
//   data:{
//     code: propTypes.string,
//     distance_monitored: propTypes.number,
//     id: propTypes.number,
//     importance: propTypes.number,
//     name: propTypes.string,
//     nb_campaign: propTypes.number,
//     trash_per_km: propTypes.number,
//     trashes_by_type: propTypes.string ,
//    //  trashe by type ex of data received
//    // "[{"Bottle-shaped":211},{"Sheet / tarp /
//    //  plastic bag / fragment":192},{"Insulating material":183}]"
//   },
//   onClose :PropType.func
// }
