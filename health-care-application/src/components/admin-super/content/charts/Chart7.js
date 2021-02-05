import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tooltip,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Select } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { TREATMENT, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart7 } from "../../../../actions/charts.action";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign:"center",
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  name,
  numMale,
  numFemale,
  sum,
  Male6569,
  Female6569,
  sum6569,
  Male7074,
  Female7074,
  sum7074,
  Male7579,
  Female7579,
  sum7579,
  Male8084,
  Female8084,
  sum8084,
  Male8590,
  Female8590,
  sum8590,
  Male9094,
  Female9094,
  sum9094,
  Male95,
  Female95,
  sum95,
  sumAllM,
  sumAllF,
  sumAll,
  sumAllPerM,
  sumAllPerF,
  sumAllPer,
  PerMale,
  PerFemale,
  Persum,
  PerMale6569,
  PerFemale6569,
  Persum6569,
  PerMale7074,
  PerFemale7074,
  Persum7074,
  PerMale7579,
  PerFemale7579,
  Persum7579,
  PerMale8084,
  PerFemale8084,
  Persum8084,
  PerMale8590,
  PerFemale8590,
  Persum8590,
  PerMale9094,
  PerFemale9094,
  Persum9094,
  PerMale95,
  PerFemale95,
  Persum95,


) {
  return {
    name,
    numMale,
    numFemale,
    sum,
    Male6569,
    Female6569,
    sum6569,
    Male7074,
    Female7074,
    sum7074,
    Male7579,
    Female7579,
    sum7579,
    Male8084,
    Female8084,
    sum8084,
    Male8590,
    Female8590,
    sum8590,
    Male9094,
    Female9094,
    sum9094,
    Male95,
    Female95,
    sum95,
    sumAllM,
    sumAllF,
    sumAll,
    sumAllPerM,
    sumAllPerF,
    sumAllPer,
    PerMale,
  PerFemale,
  Persum,
  PerMale6569,
  PerFemale6569,
  Persum6569,
  PerMale7074,
  PerFemale7074,
  Persum7074,
  PerMale7579,
  PerFemale7579,
  Persum7579,
  PerMale8084,
  PerFemale8084,
  Persum8084,
  PerMale8590,
  PerFemale8590,
  Persum8590,
  PerMale9094,
  PerFemale9094,
  Persum9094,
  PerMale95,
  PerFemale95,
  Persum95,
  };
}


const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [treatment, setTreatment,] = React.useState("เบิกต้นสังกัด");
  const [openPaper, setopenPaper] = React.useState(false);
  const chart7Reducer = useSelector(({ chart7Reducer }) => chart7Reducer);
  const {
    Affiliation,
    Yourself,
    GoldCard,
    DisabledCard,
    SocialCard,
    Other,
  } = chart7Reducer.results;
  const dispatch = useDispatch();

  const rows = [
    createData(
     ` เบิกต้นสังกัด `,
     Affiliation.g6064.ElderMale,
     Affiliation.g6064.ElderFemale,
     Affiliation.g6064.Elder,

     Affiliation.g6569.ElderMale,
     Affiliation.g6569.ElderFemale,
     Affiliation.g6569.Elder,

     Affiliation.g7074.ElderMale,
     Affiliation.g7074.ElderFemale,
     Affiliation.g7074.Elder,

     Affiliation.g7579.ElderMale,
     Affiliation.g7579.ElderFemale,
     Affiliation.g7579.Elder,

     Affiliation.g8084.ElderMale,
     Affiliation.g8084.ElderFemale,
     Affiliation.g8084.Elder,

     Affiliation.g8589.ElderMale,
     Affiliation.g8589.ElderFemale,
     Affiliation.g8589.Elder,

     Affiliation.g9094.ElderMale,
     Affiliation.g9094.ElderFemale,
     Affiliation.g9094.Elder,

     Affiliation.g95.ElderMale,
     Affiliation.g95.ElderFemale,
     Affiliation.g95.Elder,

     Affiliation.summary.ElderMale,
     Affiliation.summary.ElderFemale,
     Affiliation.summary.Elder,//sumAll

     `${Affiliation.summary.ElderPerMale} %`,
     `${Affiliation.summary.ElderPerFemale} %`,
     `${Affiliation.summary.ElderPer} %`,


     `${Affiliation.g6064.ElderPerMale} %`,
     `${Affiliation.g6064.ElderPerFemale} %`,
     `${Affiliation.g6064.ElderPer} %`,

    `${ Affiliation.g6569.ElderPerMale} %`,
    `${ Affiliation.g6569.ElderPerFemale} %`,
    `${ Affiliation.g6569.ElderPer} %`,

     `${Affiliation.g7074.ElderPerMale} %`,
     `${Affiliation.g7074.ElderPerFemale} %`,
     `${Affiliation.g7074.ElderPer} %`,

     `${Affiliation.g7579.ElderPerMale} %`,
     `${Affiliation.g7579.ElderPerFemale} %`,
     `${Affiliation.g7579.ElderPer} %`,

     `${Affiliation.g8084.ElderPerMale} %`,
     `${Affiliation.g8084.ElderPerFemale} %`,
     `${Affiliation.g8084.ElderPer} %`,

     `${Affiliation.g8589.ElderPerMale} %`,
     `${Affiliation.g8589.ElderPerFemale} %`,
     `${Affiliation.g8589.ElderPer} %`,

     `${Affiliation.g9094.ElderPerMale} %`,
     `${Affiliation.g9094.ElderPerFemale} %`,
     `${Affiliation.g9094.ElderPer} %`,

     `${Affiliation.g95.ElderPerMale} %`,
     `${Affiliation.g95.ElderPerFemale} %`,
    `${ Affiliation.g95.ElderPer} %`,

   ),
   createData(
     " ชำระเงินเอง",
     Yourself.g6064.ElderMale,
     Yourself.g6064.ElderFemale,
     Yourself.g6064.Elder,

     Yourself.g6569.ElderMale,
     Yourself.g6569.ElderFemale,
     Yourself.g6569.Elder,

     Yourself.g7074.ElderMale,
     Yourself.g7074.ElderFemale,
     Yourself.g7074.Elder,

     Yourself.g7579.ElderMale,
     Yourself.g7579.ElderFemale,
     Yourself.g7579.Elder,

     Yourself.g8084.ElderMale,
     Yourself.g8084.ElderFemale,
     Yourself.g8084.Elder,

     Yourself.g8589.ElderMale,
     Yourself.g8589.ElderFemale,
     Yourself.g8589.Elder,

     Yourself.g9094.ElderMale,
     Yourself.g9094.ElderFemale,
     Yourself.g9094.Elder,

     Yourself.g95.ElderMale,
     Yourself.g95.ElderFemale,
     Yourself.g95.Elder,

     Yourself.summary.ElderMale,
     Yourself.summary.ElderFemale,
     Yourself.summary.Elder,

     `${Yourself.summary.ElderPerMale} %`,
     `${Yourself.summary.ElderPerFemale} %`,
     0,//  `${Yourself.summary.ElderPer} %`,

     `${Yourself.g6064.ElderPerMale} %`,
     `${Yourself.g6064.ElderPerFemale} %`,
     `${Yourself.g6064.ElderPer} %`,

    `${ Yourself.g6569.ElderPerMale} %`,
    `${ Yourself.g6569.ElderPerFemale} %`,
    `${ Yourself.g6569.ElderPer} %`,

     `${Yourself.g7074.ElderPerMale} %`,
     `${Yourself.g7074.ElderPerFemale} %`,
     `${Yourself.g7074.ElderPer} %`,

     `${Yourself.g7579.ElderPerMale} %`,
     `${Yourself.g7579.ElderPerFemale} %`,
     `${Yourself.g7579.ElderPer} %`,

     `${Yourself.g8084.ElderPerMale} %`,
     `${Yourself.g8084.ElderPerFemale} %`,
     `${Yourself.g8084.ElderPer} %`,

     `${Yourself.g8589.ElderPerMale} %`,
     `${Yourself.g8589.ElderPerFemale} %`,
     `${Yourself.g8589.ElderPer} %`,

     `${Yourself.g9094.ElderPerMale} %`,
     `${Yourself.g9094.ElderPerFemale} %`,
     `${Yourself.g9094.ElderPer} %`,

     `${Yourself.g95.ElderPerMale} %`,
     `${Yourself.g95.ElderPerFemale} %`,
    `${ Yourself.g95.ElderPer} %`,
   ),
   createData(
     " บัตรทอง",
     GoldCard.g6064.ElderMale,
     GoldCard.g6064.ElderFemale,
     GoldCard.g6064.Elder,

     GoldCard.g6569.ElderMale,
     GoldCard.g6569.ElderFemale,
     GoldCard.g6569.Elder,

     GoldCard.g7074.ElderMale,
     GoldCard.g7074.ElderFemale,
     GoldCard.g7074.Elder,

     GoldCard.g7579.ElderMale,
     GoldCard.g7579.ElderFemale,
     GoldCard.g7579.Elder,

     GoldCard.g8084.ElderMale,
     GoldCard.g8084.ElderFemale,
     GoldCard.g8084.Elder,

     GoldCard.g8589.ElderMale,
     GoldCard.g8589.ElderFemale,
     GoldCard.g8589.Elder,

     GoldCard.g9094.ElderMale,
     GoldCard.g9094.ElderFemale,
     GoldCard.g9094.Elder,

     GoldCard.g95.ElderMale,
     GoldCard.g95.ElderFemale,
     GoldCard.g95.Elder,

     GoldCard.summary.ElderMale,
     GoldCard.summary.ElderFemale,
     GoldCard.summary.Elder,

   `${GoldCard.summary.ElderPerMale} %`,
    `${GoldCard.summary.ElderPerFemale} %`,
    `${GoldCard.summary.ElderPer} %`,

     `${GoldCard.g6064.ElderPerMale} %`,
     `${GoldCard.g6064.ElderPerFemale} %`,
     `${GoldCard.g6064.ElderPer} %`,

    `${ GoldCard.g6569.ElderPerMale} %`,
    `${ GoldCard.g6569.ElderPerFemale} %`,
    `${ GoldCard.g6569.ElderPer} %`,

     `${GoldCard.g7074.ElderPerMale} %`,
     `${GoldCard.g7074.ElderPerFemale} %`,
     `${GoldCard.g7074.ElderPer} %`,

     `${GoldCard.g7579.ElderPerMale} %`,
     `${GoldCard.g7579.ElderPerFemale} %`,
     `${GoldCard.g7579.ElderPer} %`,

     `${GoldCard.g8084.ElderPerMale} %`,
     `${GoldCard.g8084.ElderPerFemale} %`,
     `${GoldCard.g8084.ElderPer} %`,

     `${GoldCard.g8589.ElderPerMale} %`,
     `${GoldCard.g8589.ElderPerFemale} %`,
     `${GoldCard.g8589.ElderPer} %`,

     `${GoldCard.g9094.ElderPerMale} %`,
     `${GoldCard.g9094.ElderPerFemale} %`,
     `${GoldCard.g9094.ElderPer} %`,

     `${GoldCard.g95.ElderPerMale} %`,
     `${GoldCard.g95.ElderPerFemale} %`,
    `${ GoldCard.g95.ElderPer} %`,
   ),
   createData(
     " บัตรผู้พิการ",
     DisabledCard.g6064.ElderMale,
     DisabledCard.g6064.ElderFemale,
     DisabledCard.g6064.Elder,

     DisabledCard.g6569.ElderMale,
     DisabledCard.g6569.ElderFemale,
     DisabledCard.g6569.Elder,

     DisabledCard.g7074.ElderMale,
     DisabledCard.g7074.ElderFemale,
     DisabledCard.g7074.Elder,

     DisabledCard.g7579.ElderMale,
     DisabledCard.g7579.ElderFemale,
     DisabledCard.g7579.Elder,

     DisabledCard.g8084.ElderMale,
     DisabledCard.g8084.ElderFemale,
     DisabledCard.g8084.Elder,

     DisabledCard.g8589.ElderMale,
     DisabledCard.g8589.ElderFemale,
     DisabledCard.g8589.Elder,

     DisabledCard.g9094.ElderMale,
     DisabledCard.g9094.ElderFemale,
     DisabledCard.g9094.Elder,

     DisabledCard.g95.ElderMale,
     DisabledCard.g95.ElderFemale,
     DisabledCard.g95.Elder,

     DisabledCard.summary.ElderMale,
     DisabledCard.summary.ElderFemale,
     DisabledCard.summary.Elder,

     `${DisabledCard.summary.ElderPerMale} %`,
     `${DisabledCard.summary.ElderPerFemale} %`,
      `${DisabledCard.summary.ElderPer} %`,

     `${DisabledCard.g6064.ElderPerMale} %`,
     `${DisabledCard.g6064.ElderPerFemale} %`,
     `${DisabledCard.g6064.ElderPer} %`,

    `${ DisabledCard.g6569.ElderPerMale} %`,
    `${ DisabledCard.g6569.ElderPerFemale} %`,
    `${ DisabledCard.g6569.ElderPer} %`,

     `${DisabledCard.g7074.ElderPerMale} %`,
     `${DisabledCard.g7074.ElderPerFemale} %`,
     `${DisabledCard.g7074.ElderPer} %`,

     `${DisabledCard.g7579.ElderPerMale} %`,
     `${DisabledCard.g7579.ElderPerFemale} %`,
     `${DisabledCard.g7579.ElderPer} %`,

     `${DisabledCard.g8084.ElderPerMale} %`,
     `${DisabledCard.g8084.ElderPerFemale} %`,
     `${DisabledCard.g8084.ElderPer} %`,

     `${DisabledCard.g8589.ElderPerMale} %`,
     `${DisabledCard.g8589.ElderPerFemale} %`,
     `${DisabledCard.g8589.ElderPer} %`,

     `${DisabledCard.g9094.ElderPerMale} %`,
     `${DisabledCard.g9094.ElderPerFemale} %`,
     `${DisabledCard.g9094.ElderPer} %`,

     `${DisabledCard.g95.ElderPerMale} %`,
     `${DisabledCard.g95.ElderPerFemale} %`,
    `${ DisabledCard.g95.ElderPer} %`,
   ),
   createData(
     " บัตรประกันสังคม",
     SocialCard.g6064.ElderMale,
     SocialCard.g6064.ElderFemale,
     SocialCard.g6064.Elder,

     SocialCard.g6569.ElderMale,
     SocialCard.g6569.ElderFemale,
     SocialCard.g6569.Elder,

     SocialCard.g7074.ElderMale,
     SocialCard.g7074.ElderFemale,
     SocialCard.g7074.Elder,

     SocialCard.g7579.ElderMale,
     SocialCard.g7579.ElderFemale,
     SocialCard.g7579.Elder,

     SocialCard.g8084.ElderMale,
     SocialCard.g8084.ElderFemale,
     SocialCard.g8084.Elder,

     SocialCard.g8589.ElderMale,
     SocialCard.g8589.ElderFemale,
     SocialCard.g8589.Elder,

     SocialCard.g9094.ElderMale,
     SocialCard.g9094.ElderFemale,
     SocialCard.g9094.Elder,

     SocialCard.g95.ElderMale,
     SocialCard.g95.ElderFemale,
     SocialCard.g95.Elder,
   
     SocialCard.summary.ElderMale,
     SocialCard.summary.ElderFemale,
     SocialCard.summary.Elder,

     `${SocialCard.summary.ElderPerMale} %`,
     `${SocialCard.summary.ElderPerFemale} %`,
      `${SocialCard.summary.ElderPer} %`,

     `${SocialCard.g6064.ElderPerMale} %`,
     `${SocialCard.g6064.ElderPerFemale} %`,
     `${SocialCard.g6064.ElderPer} %`,

    `${ SocialCard.g6569.ElderPerMale} %`,
    `${ SocialCard.g6569.ElderPerFemale} %`,
    `${ SocialCard.g6569.ElderPer} %`,

     `${SocialCard.g7074.ElderPerMale} %`,
     `${SocialCard.g7074.ElderPerFemale} %`,
     `${SocialCard.g7074.ElderPer} %`,

     `${SocialCard.g7579.ElderPerMale} %`,
     `${SocialCard.g7579.ElderPerFemale} %`,
     `${SocialCard.g7579.ElderPer} %`,

     `${SocialCard.g8084.ElderPerMale} %`,
     `${SocialCard.g8084.ElderPerFemale} %`,
     `${SocialCard.g8084.ElderPer} %`,

     `${SocialCard.g8589.ElderPerMale} %`,
     `${SocialCard.g8589.ElderPerFemale} %`,
     `${SocialCard.g8589.ElderPer} %`,

     `${SocialCard.g9094.ElderPerMale} %`,
     `${SocialCard.g9094.ElderPerFemale} %`,
     `${SocialCard.g9094.ElderPer} %`,

     `${SocialCard.g95.ElderPerMale} %`,
     `${SocialCard.g95.ElderPerFemale} %`,
    `${ SocialCard.g95.ElderPer} %`,
   ),
   createData(
     " อื่นๆ",
         Other.g6064.ElderMale,
         Other.g6064.ElderFemale,
         Other.g6064.Elder,

         Other.g6569.ElderMale,
         Other.g6569.ElderFemale,
         Other.g6569.Elder,

         Other.g7074.ElderMale,
         Other.g7074.ElderFemale,
         Other.g7074.Elder,

         Other.g7579.ElderMale,
         Other.g7579.ElderFemale,
         Other.g7579.Elder,

         Other.g8084.ElderMale,
         Other.g8084.ElderFemale,
         Other.g8084.Elder,

         Other.g8589.ElderMale,
         Other.g8589.ElderFemale,
         Other.g8589.Elder,

         Other.g9094.ElderMale,
         Other.g9094.ElderFemale,
         Other.g9094.Elder,

         Other.g95.ElderMale,
         Other.g95.ElderFemale,
         Other.g95.Elder,

         Other.summary.ElderMale,
         Other.summary.ElderFemale,
         Other.summary.Elder,

     `${Other.summary.ElderPerMale} %`,
     `${Other.summary.ElderPerFemale} %`,
      `${Other.summary.ElderPer} %`,

     `${Other.g6064.ElderPerMale} %`,
     `${Other.g6064.ElderPerFemale} %`,
     `${Other.g6064.ElderPer} %`,

    `${Other.g6569.ElderPerMale} %`,
    `${Other.g6569.ElderPerFemale} %`,
    `${Other.g6569.ElderPer} %`,

     `${Other.g7074.ElderPerMale} %`,
     `${Other.g7074.ElderPerFemale} %`,
     `${Other.g7074.ElderPer} %`,

     `${Other.g7579.ElderPerMale} %`,
     `${Other.g7579.ElderPerFemale} %`,
     `${Other.g7579.ElderPer} %`,

     `${Other.g8084.ElderPerMale} %`,
     `${Other.g8084.ElderPerFemale} %`,
     `${Other.g8084.ElderPer} %`,

     `${Other.g8589.ElderPerMale} %`,
     `${Other.g8589.ElderPerFemale} %`,
     `${Other.g8589.ElderPer} %`,

     `${Other.g9094.ElderPerMale} %`,
     `${Other.g9094.ElderPerFemale} %`,
     `${Other.g9094.ElderPer} %`,

     `${Other.g95.ElderPerMale} %`,
     `${Other.g95.ElderPerFemale} %`,
    `${Other.g95.ElderPer} %`,
   ),
 ];
  const handleChange = (e) => {
    setTreatment(e.target.value);
    dispatch(getDataChart7(e.target.value));
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  return (
    <div className="card-body">
      {/* <div>
        เลือกสิทธิการรักษา &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={treatment}
          onChange={handleChange}
        >
          {TREATMENT.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </Select>
      </div>
      <br /> */}

      {/* <div className="chart" ref={ref}>
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["อายุ", `ชาย ${summary.ElderMale} คน`, `หญิง ${summary.ElderFemale} คน`, `รวม ${summary.Elder} คน`],
            [`60-64\nทั้งหมด ${g6064.Elder} คน\nชาย ${g6064.ElderPerMale}%\nหญิง ${g6064.ElderPerFemale}%`, g6064.ElderMale, g6064.ElderFemale, g6064.Elder],
            [`65-69\n${g6569.Elder} คน\n${g6569.ElderPerMale}%\n${g6569.ElderPerFemale}%`, g6569.ElderMale, g6569.ElderFemale, g6569.Elder],
            [`70-74\n${g7074.Elder} คน\n${g7074.ElderPerMale}%\n${g7074.ElderPerFemale}%`, g7074.ElderMale, g7074.ElderFemale, g7074.Elder],
            [`75-79\n${g7579.Elder} คน\n${g7579.ElderPerMale}%\n${g7579.ElderPerFemale}%`, g7579.ElderMale, g7579.ElderFemale, g7579.Elder],
            [`80-84\n${g8084.Elder} คน\n${g8084.ElderPerMale}%\n${g8084.ElderPerFemale}%`, g8084.ElderMale, g8084.ElderFemale, g8084.Elder],
            [`85-89\n${g8589.Elder} คน\n${g8589.ElderPerMale}%\n${g8589.ElderPerFemale}%`, g8589.ElderMale, g8589.ElderFemale, g8589.Elder],
            [`90-94\n${g9094.Elder} คน\n${g9094.ElderPerMale}%\n${g9094.ElderPerFemale}%`, g9094.ElderMale, g9094.ElderFemale, g9094.Elder],
            [`95+\n${g95.Elder} คน\n${g95.ElderPerMale}%\n${g95.ElderPerFemale}%`, g95.ElderMale, g95.ElderFemale, g95.Elder],
          ]}
          options={{
            chart: {
              title: `จำนวนประชากรผู้สูงอายุทั้งหมดใน ${treatment} จำนวน ${summary.Elder} คน`,
              subtitle: "แจกแจงตามช่วงอายุ เพศ และสิทธิการรักษา",
            },
          }}
        />
      </div> */}
    <div ref={ref}>
        <FormControlLabel
          control={
            <Switch
              size="medium"
              checked={openPaper}
              onChange={toggleChecked}
            />
          }
          label="คิดเป็นร้อยละ"
        />
        {Affiliation.g6064.ElderMale}
        {openPaper ? (
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              {/*%%%%%%%%%%%%%%%%55%%%%% */}
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    ระดับการศึกษา
                  </StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
                  <StyledTableCell align="center">65-69</StyledTableCell>
                  <StyledTableCell align="center">70-74</StyledTableCell>
                  <StyledTableCell align="center">75-79</StyledTableCell>
                  <StyledTableCell align="center">80-84</StyledTableCell>
                  <StyledTableCell align="center">85-89</StyledTableCell>
                  <StyledTableCell align="center">90-94</StyledTableCell>
                  <StyledTableCell align="center">95+</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell  component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">  {/* 6064 */}
                      {row.PerMale ==="NaN %"?  "0 %" : row.PerMale}
                      <br />
                      {row.PerFemale ==="NaN %"? "0 %" :row.PerFemale}
                      <br />
                      {row.Persum ==="NaN %"? "0 %" :row.Persum}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale6569==="NaN %"? "0 %" : row.PerMale6569}
                      <br />
                      {row.PerFemale6569==="NaN %"? "0 %": row.PerFemale6569}
                      <br />
                      {row.Persum6569==="NaN %"? "0 %": row.Persum6569}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale7074==="NaN %"? "0 %":row.PerMale7074} 
                      <br />
                      {row.PerFemale7074==="NaN %"? "0 %":row.PerFemale7074}
                      <br />
                      {row.Persum7074==="NaN %"? "0 %":row.Persum7074}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale7579==="NaN %"? "0 %":row.PerMale7579} 
                      <br />
                      {row.PerFemale7579==="NaN %"? "0 %":row.PerFemale7579}
                      <br />
                      {row.Persum7579==="NaN %"? "0 %":row.Persum7579}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale8084==="NaN %"? "0 %":row.PerMale8084} <br />
                      {row.PerFemale8084==="NaN %"? "0 %":row.PerFemale8084}
                      <br />
                      {row.Persum8084==="NaN %"? "0 %":row.Persum8084}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale8590==="NaN %"? "0 %": row.PerMale8590} <br />
                      {row.PerFemale8590==="NaN %"? "0 %": row.PerFemale8590}
                      <br />
                      {row.Persum8590 ==="NaN %"? "0 %": row.Persum8590}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale9094==="NaN %"? "0 %":row.PerMale9094} <br />
                      {row.PerFemale9094==="NaN %"? "0 %":row.PerFemale9094}
                      <br />
                      {row.Persum9094==="NaN %"? "0 %":row.Persum9094}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale95==="NaN %"? "0 %":row.PerMale95} <br />
                      {row.PerFemale95==="NaN %"? "0 %":row.PerFemale95}
                      <br />
                      {row.Persum95==="NaN %"? "0 %":row.Persum95}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.sumAllPerM==="NaN %"? "0 %":row.sumAllPerM} <br />
                      {row.sumAllPerF==="NaN %"? "0 %":row.sumAllPerF}<br />
                      {row.sumAllPer==="NaN %"? "0 %":row.sumAllPer}</StyledTableCell>
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    ระดับการศึกษา
                  </StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
                  <StyledTableCell align="center">65-69</StyledTableCell>
                  <StyledTableCell align="center">70-74</StyledTableCell>
                  <StyledTableCell align="center">75-79</StyledTableCell>
                  <StyledTableCell align="center">80-84</StyledTableCell>
                  <StyledTableCell align="center">85-89</StyledTableCell>
                  <StyledTableCell align="center">90-94</StyledTableCell>
                  <StyledTableCell align="center">95+</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell  component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">  {/* 6064 */}
                      {row.numMale}
                      <br />
                      {row.numFemale}
                      <br />
                      {row.sum}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male6569}
                      <br />
                      {row.Female6569}
                      <br />
                      {row.sum6569}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male7074} <br />
                      {row.Female7074}
                      <br />
                      {row.sum7074}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male7579} <br />
                      {row.Female7579}
                      <br />
                      {row.sum7579}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male8084} <br />
                      {row.Female8084}
                      <br />
                      {row.sum8084}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male8590} <br />
                      {row.Female8590}
                      <br />
                      {row.sum8590}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male9094} <br />
                      {row.Female9094}
                      <br />
                      {row.sum9094}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male95} <br />
                      {row.Female95}
                      <br />
                      {row.sum95}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.sumAllM} <br />
                      {row.sumAllF}
                      <br />
                      {row.sumAll}</StyledTableCell>
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
});

export default function Chart7() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา ช่วงอายุ และเพศ
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={PRINT_THIS_SECTION}
            >
              <button
                type="button"
                className="btn btn-tool"
                onClick={useReactToPrint({
                  content: () => componentRef.current,
                })}
              >
                <i className="fas fa-print"></i>
              </button>
            </Tooltip>
          </div>
        </div>
        <ShowChart ref={componentRef} />
      </div>
    </div>
  );
}
