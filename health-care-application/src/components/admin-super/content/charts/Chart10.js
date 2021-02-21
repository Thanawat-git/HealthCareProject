import React from "react";
import {
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector, useStore } from "react-redux";
import { PRINT_THIS_SECTION } from "../../../../constants";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
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

const ShowChart = React.forwardRef((props, ref) => {
  const chart10Reducer = useSelector(({ chart10Reducer }) => chart10Reducer);
  const {
    Elder,
    Male,
    Female,
    ElderBmi,
    MaleBmi,
    FemaleBmi,
    Thin,
    Normal,
    Plump,
    Fat,
    VeryFat,
  } = chart10Reducer.results;
  const headers = [
    { label: "ระดับดัชนีมวลกาย (กิโลกรัม/ตารางเมตร)", key: "hcol" },
    { label: "ชาย", key: "male" },
    { label: "ชาย(%)", key: "permale" },
    { label: "หญิง", key: "female" },
    { label: "หญิง(%)", key: "perfemale" },
    { label: "รวม", key: "sum" },
    { label: "รวม(%)", key: "persum" },
  ];

  const data = [
    {
      hcol: "ผอม",
      male: Thin.Male,
      permale: Thin.PerMale === "NaN" ? "0%" : Thin.PerMale + "%",
      female: Thin.Female,
      perfemale: Thin.PerFemale === "NaN" ? "0%" : Thin.PerFemale + "%",
      sum: Thin.Sum,
      persum: Thin.PerSum === "NaN" ? "0%" : Thin.PerSum + "%",
    },
    {
      hcol: "ปกติ",
      male: Normal.Male,
      permale: Normal.PerMale === "NaN" ? "0%" : Normal.PerMale + "%",
      female: Normal.Female,
      perfemale: Normal.PerFemale === "NaN" ? "0%" : Normal.PerFemale + "%",
      sum: Normal.Sum,
      persum: Normal.PerSum === "NaN" ? "0%" : Normal.PerSum + "%",
    },
    {
      hcol: "ท้วม",
      male: Plump.Male,
      permale: Plump.PerMale === "NaN" ? "0%" : Plump.PerMale + "%",
      female: Plump.Female,
      perfemale: Plump.PerFemale === "NaN" ? "0%" : Plump.PerFemale + "%",
      sum: Plump.Sum,
      persum: Plump.PerSum === "NaN" ? "0%" : Plump.PerSum + "%",
    },
    {
      hcol: "อ้วน",
      male: Fat.Male,
      permale: Fat.PerMale === "NaN" ? "0%" : Fat.PerMale + "%",
      female: Fat.Female,
      perfemale: Fat.PerFemale === "NaN" ? "0%" : Fat.PerFemale + "%",
      sum: Fat.Sum,
      persum: Fat.PerSum === "NaN" ? "0%" : Fat.PerSum + "%",
    },
    {
      hcol: "อ้วนมาก",
      male: VeryFat.Male,
      permale: VeryFat.PerMale === "NaN" ? "0%" : VeryFat.PerMale + "%",
      female: VeryFat.Female,
      perfemale: VeryFat.PerFemale === "NaN" ? "0%" : VeryFat.PerFemale + "%",
      sum: VeryFat.Sum,
      persum: VeryFat.PerSum === "NaN" ? "0%" : VeryFat.PerSum + "%",
    },
  ];
  return (
    <React.Fragment>
      <div className="card-body">
        <div className="csv-link">
          <CSVLink
            data={data}
            headers={headers}
            // className="csv-link"
            filename={
              "จำนวนและร้อยละผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและเพศ.csv"
            }
          >
            Download CSV
          </CSVLink>
        </div>
        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center" colSpan={7}>จำนวนและร้อยละผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและเพศ</StyledTableCell>
                </TableRow>
                <TableRow>
                  {headers.map((value, i) => {
                    return (
                      <React.Fragment>
                        {i > 0 ? (
                          <StyledTableCell align="right">{value.label}</StyledTableCell>
                        ) : (
                          <StyledTableCell>{value.label}</StyledTableCell>
                        )}
                      </React.Fragment>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                { chart10Reducer.isFetching === false ?
                data.map((value) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell>{value.hcol}</StyledTableCell>
                      <StyledTableCell align="right">{value.male}</StyledTableCell>
                      <StyledTableCell align="right">{value.permale}</StyledTableCell>
                      <StyledTableCell align="right">{value.female}</StyledTableCell>
                      <StyledTableCell align="right">{value.perfemale}</StyledTableCell>
                      <StyledTableCell align="right">{value.sum}</StyledTableCell>
                      <StyledTableCell align="right">{value.persum}</StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : <React.Fragment>
              <StyledTableRow><StyledTableCell colSpan={7}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={7}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={7}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={7}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={7}> <Skeleton/> </StyledTableCell></StyledTableRow>
              </React.Fragment>
              }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart10() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและเพศ
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-plus"></i>
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
