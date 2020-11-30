import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardContent, ListItem, ListItemIcon} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 700,
      fontSize: 20,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    a: {
        textDecoration:'none',
        fontSize: 20,
        color:'red'
    },
});

function MainMenu(props) {
    const collect2 = useSelector(({forms2Reducer}) => forms2Reducer.collect)
    const collect3 = useSelector(({forms3Reducer}) => forms3Reducer.collect)
    const collect4 = useSelector(({forms4Reducer}) => forms4Reducer.collect)
    const collect5 = useSelector(({forms5Reducer}) => forms5Reducer.collect)
    const collect6 = useSelector(({forms6Reducer}) => forms6Reducer.collect) 
    const collect7 = useSelector(({forms7Reducer}) => forms7Reducer.collect)
    const collect8 = useSelector(({forms8Reducer}) => forms8Reducer.collect)
    const collect9 = useSelector(({forms9Reducer}) => forms9Reducer)
    const collect92 = useSelector(({forms92Reducer}) => forms92Reducer.collect)
    const collect10 = useSelector(({forms10Reducer}) => forms10Reducer.collect)
    const classes = useStyles();
    const [i2, setI2] = useState('')
    const [i3, setI3] = useState('')
    const [i4, setI4] = useState('')
    const [i5, setI5] = useState('')
    const [i6, setI6] = useState('')
    const [i7, setI7] = useState('')
    const [i8, setI8] = useState('')
    const [i9, setI9] = useState('')
    const [i10, setI0] = useState('')

    useEffect(() => {
        console.log('ans10: ',collect10)
        collect2 && setI2('green')
        collect3 && setI3('green')
        collect4 && setI4('green')
        collect5 && setI5('green')
        collect6 && setI6('green')
        collect7 && setI7('green')
        collect8 && setI8('green')
        if(collect9.collect1 && collect9.collect2 && collect92){
            setI9('green')
        }
        collect10&&setI0('green')
    }, []);

    const useStyles2 = makeStyles({
        i2: {
            color:i2
        },
        i3: {
            color:i3
        },
        i4: {
            color:i4
        },
        i5: {
            color:i5
        },
        i6: {
            color:i6
        },
        i7: {
            color:i7
        },
        i8: {
            color:i8
        },
        i9: {
            color:i9
        },
        i10: {
            color:i10
        },
    });
    const colorIcon = useStyles2();

    return (
        <React.Fragment>
            <div className="row ">
                <div className="col-12 txt-center">
                    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
                </div>
            </div>
            <Card className={classes.root}>
                <CardContent>
                <Link to="/sec2">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i2}/>
                        </ListItemIcon>
                    แบบคัดกรองสภาวะสุขภาพ
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec3">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i3}/>
                        </ListItemIcon>
                    ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec4">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i4}/>
                        </ListItemIcon>
                    แบบคัดกรองสุขภาพตา
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec5">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i5}/>
                        </ListItemIcon>
                    การประเมินสุขภาพช่องปาก
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec6">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i6}/>
                        </ListItemIcon>
                    การประเมินความสามารถในการทำกิจวัตรประจำ
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec7">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i7}/>
                        </ListItemIcon>
                    การประเมินภาวะสมองเสื่อม
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec8">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i8}/>
                        </ListItemIcon>
                    การคัดกรองโรคซึมเศร้า
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec9">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i9}/>
                        </ListItemIcon>
                    สุขภาพกระดูกและกล้ามเนื้อ
                    </ListItem>
                </Link> <hr/>
                <Link to="/sec10">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i10}/>
                        </ListItemIcon>
                    การคัดกรองการกลั้นปัสสาวะ
                    </ListItem>
                </Link>
                </CardContent>
                <Button variant="contained" size="large" color="primary" fullWidth >ดูผลการประเมิน</Button>
            </Card>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    const StateForm = state.FormReducer; // State of Form
    const BasicInfo = state.ElderlyReducer; // State of basic elderly data
    return {
        StateForm: StateForm,
        BasicInfo: BasicInfo
    }
}

export default connect(mapStateToProps)(MainMenu);