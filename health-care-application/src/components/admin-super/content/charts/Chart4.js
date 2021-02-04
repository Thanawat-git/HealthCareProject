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
  Select,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart4 } from "../../../../actions/charts.action";

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
function createData(Keeper, noKeeper) {
  return {
    Keeper,
    noKeeper,
  };
}
const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart4Reducer = useSelector(({ chart4Reducer }) => chart4Reducer);
  const dispatch = useDispatch();
  const {
    Child,
    GrandChild,
    Keeper,
    NoKeeper,
    Other,
    Parent,
    Partner,
    Sibling,
    SonInLaw,
    Summary,
  } = chart4Reducer.results;
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart4(e.target.value));
  };
  const rows = [createData(NoKeeper, Keeper)];
  return (
    <div className="card-body">
      {/* <div>
        เลือกชุมชน &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={community}
          onChange={handleChange}
        >
          {COMMUNITYS.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </Select>
      </div> 
      <br />
      <div className="row" ref={ref}>
        <div className="col-12">
          <p style={{ textAlign: "center" }}>
            จำนวนประชากรผู้สูงอายุทั้งหมดใน {community} จำนวน {Summary} คน
          </p>
        </div>
        <div
          className="chart col-6 align-self-center"
          style={{ textAlign: "center" }}
        >
          {Summary === 0 ? (
            <h1>ไม่มีข้อมูล</h1>
          ) : (
            <Chart
              //   maxWidth={"400px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["", "จำนวน"],
                ["มีผู้ดูแล", Keeper],
                ["ไม่มีผู้ดูแล", NoKeeper],
              ]}
            />
          )}
        </div>
        <div className="chart col-6">
          <Chart
            // width={"300px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            // data={[
            //   ["ความสัมพันธ์", "จำนวน"],
            //   ["บุตรชาย/บุตรสาว", 11],
            //   ["ลูกเขย/ลูกสะใภ้", 2],
            //   ["หลานชาย/หลานสาว", 2],
            //   ["พี่น้อง", 2],
            //   ["บิดา/มารดา", 7],
            //   ["สามี/ภรรยา", 7],
            //   ["บุคคลอื่น", 7],
            // ]}
            data={[
              [
                "",
                "บุตรชาย/บุตรสาว",
                "ลูกเขย/ลูกสะใภ้",
                "หลานชาย/หลานสาว",
                "พี่น้อง",
                "บิดา/มารดา",
                "สามี/ภรรยา",
                "บุคคลอื่น",
              ],
              [
                "ผู้สูงอายุที่มีผู้ดูแล",
                Child,
                SonInLaw,
                GrandChild,
                Sibling,
                Parent,
                Partner,
                Other,
              ],
            ]}
            options={{
              title: "ผู้สูงอายุที่มีผู้ดูแล",
            }}
          />
        </div>
      </div>*/}

      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ชุมชน</StyledTableCell>
                <StyledTableCell align="center">มีผู้ดูแล</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>ไม่มี</StyledTableCell>
                <StyledTableCell>มี</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell align="center" component="th" scope="row">
                    ชุมชนมณีแก้ว
                  </StyledTableCell>
                  <StyledTableCell>{row.noKeeper}</StyledTableCell>
                  <StyledTableCell>{row.Keeper}</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* ----------------------------Next--------------- */}
      <div style={{marginTop:"5%"}}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ชุมชน</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell align="center">ไม่มีผู้ดูแล</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>

              </TableRow>
              <TableRow>
              <StyledTableCell>&nbsp;</StyledTableCell>
              <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell >บุตรชาย/บุตรสาว</StyledTableCell>
                <StyledTableCell>ลูกเขย/ลูกสะใภ้</StyledTableCell>
                <StyledTableCell>หลานชาย/หลานสาว</StyledTableCell>
                <StyledTableCell>บิดา/มารดา</StyledTableCell>
                <StyledTableCell>สามี/ภรรยา</StyledTableCell>
                <StyledTableCell>บุคคลอื่น</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell align="center" component="th" scope="row"> ชุมชนมณีแก้ว</StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">{row.noKeeper}</StyledTableCell>
                  <StyledTableCell align="center">{row.Keeper}</StyledTableCell>
                  <StyledTableCell align="center">{row.Keeper}</StyledTableCell>
                  <StyledTableCell align="center">{row.noKeeper}</StyledTableCell>
                  <StyledTableCell align="center">{row.Keeper}</StyledTableCell>
                  <StyledTableCell align="center">{row.Keeper}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart4() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน
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
