import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, ListItem, ListItemIcon} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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
    const i = 0;
    const classes = useStyles();
    const [i1, setI1] = useState('')
    const [i2, setI2] = useState('')
    const [i3, setI3] = useState('')
    const [i4, setI4] = useState('')
    const [i5, setI5] = useState('')
    const [i6, setI6] = useState('')
    const [i7, setI7] = useState('')
    const [i8, setI8] = useState('')
    const [i9, setI9] = useState('')
    const [i0, setI0] = useState('')

    useEffect(() => {
        // console.log('fff',typeof props.StateForm)
        // for(const [key, value] of Object.entries(props.FormStatus)){
        //     // console.log(`MainMume1: ${key}: ${value}`);
        //     if(key==='FormReducer'){
        //     // รูปแบบของข้อมูลใน state
        //         // FormReducer = {
        //         //     SEC2: [{
        //         //         RawData: [{}],
        //         //         ResultArray: [{}],
        //         //         Collect: true or false
        //         //     }]
        //         // }
                for(const [key1, value1] of Object.entries(props.StateForm)){
                    switch (key1) {
                        case 'SEC2':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI2('green')}
                            break;
                        case 'SEC3':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI3('green')}
                            break;
                        case 'SEC4':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI4('green')}
                            break;
                        case 'SEC5':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI5('green')}
                            break;
                        case 'SEC6':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI6('green')}
                            break;
                        case 'SEC7':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI7('green')}
                            break;
                        case 'SEC8':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI8('green')}
                            break;
                        case 'SEC9':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI9('green')}
                            break;
                        case 'SEC0':
                            for(const [key2, value2] of Object.entries(value1)){value2.Collect && setI0('green')}
                            break;
                    
                    }
        //             // if(key1==='SEC2'){
        //             //     for(const [key2, value2] of Object.entries(value1)){ // เข้าถึง Collect
        //             //         // ถ้าจะเข้าถึง RawData กับ ResultArray ต้อง loop อีกชั้นนึง
        //             //         console.log(`MainMume loop3: ${key2}: ${value2.Collect}`);
        //             //         value2.Collect && setI2('green')
        //             //     }
        //             // }
        //             // console.log(`MainMume: ${key1}: ${value1}`);
                }
        //     } 
        // }
    }, []);

    const useStyles2 = makeStyles({
        i1: {
            color:i1
        },
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
                <Link to="/sec1-page1">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckCircleIcon className={colorIcon.i1}/>
                        </ListItemIcon>
                        ส่วนที่ 1 ข้อมูลพื้นฐาน
                    </ListItem>
                </Link> <hr/>

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
                            <CheckCircleIcon className={colorIcon.i0}/>
                        </ListItemIcon>
                     -----
                    </ListItem>
                </Link>
                
                </CardContent>
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