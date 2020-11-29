import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import * as search from "../../actions/searchEld.action";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, InputAdornment, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState();
  const dispatch = useDispatch()
  const classes = useStyles();

  useEffect(() => {
    // (async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //   console.log('response ',response)
    //   const countries = await response.json();
    //   console.log('countries ',countries)
    //   // setOptions(countries);

    //   dispatch(search.add(countries))
    //   console.log('options ',searchEld.found)
      
    // })();
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>{
      setOptions(res.data);
      dispatch(search.add(res.data))
    })
  }, []);

  var [foundSearch, setfoundSearch] =  React.useState([]) // เก็บ array ของผลลัพธ์ ที่ค้าหาเจอ
  var [selectEld, setselectEld] =  React.useState({}) // เก็บค่าต่างๆของคนที่ถูกเลือก

  const searchArr = (e)=>{
    var searchvalue = e.target.value;
    var filterNames = options.filter((v,i)=>{
        return(v.name.includes(searchvalue));
    })
    setfoundSearch(filterNames)
    console.log('foundSearch: '+foundSearch.length)
  }
 
  function handleClickOpen(value){
    setselectEld(value)
    console.log('value: ', value)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="inner-seach1">
      <TextField
      label="กรอกชื่อหรือนามสกุล"
      id="standard-start-adornment"
      onKeyUp={(e)=>searchArr(e)}
      InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
      }}
      />
      </div>
    
      <div className="inner-seach2">
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Elder ID</TableCell>
            <TableCell>Full Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          foundSearch.length !=0 && foundSearch.map((value,index)=>{
            return(
              <TableRow key={value.id}>
                <TableCell align="right">{value.phone}</TableCell>
                <TableCell align="right">
                <Button variant="outlined" color="primary" onClick={()=>handleClickOpen(value)}>
                {`${value.name}`}
                </Button>
                </TableCell>
              </TableRow>
            //   <div>
            // <Button variant="outlined" color="primary" onClick={()=>handleClickOpen(value)}>
            // {`${value.phone} ${value.name}`}
            // </Button>
            // </div>
            )
          })
        }
        </TableBody>
        </Table>
      </TableContainer>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>{selectEld.name}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary">
                Agree
              </Button>
            </DialogActions> */}
          </Dialog>
            
      </div>
    </React.Fragment>
  );
}
