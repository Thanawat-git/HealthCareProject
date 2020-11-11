import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 700,
      fontSize: 20,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});

export default function MainMenu() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <React.Fragment>
            <div className="row ">
                <div className="col-12 txt-center">
                    <h1>Title</h1>
                </div>
            </div>
            <Card className={classes.root}>
                <CardContent>
                <Link to="/sec1-page1" >
                    ส่วนที่ 1 ข้อมูลพื้นฐาน
                </Link> <br/> <hr/>
                <Link to="/sec2">
                    ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ
                </Link><br/> <hr/>
                <Link to="/sec3">
                    ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
                </Link><br/> <hr/>
                <Link to="/sec4">
                    ส่วนที่ 4 แบบคัดกรองสุขภาพตา
                </Link><br/> <hr/>
                <Link to="/sec5">
                    ส่วนที่ 5 การประเมินสุขภาพช่องปาก
                </Link><br/> <hr/>
                <Link to="/sec6">
                    ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ
                </Link><br/> <hr/>
                <Link to="/sec7">
                    ส่วนที่ 7 การประเมินภาวะสมองเสื่อม
                </Link><br/> <hr/>
                <Link to="/sec8">
                    ส่วนที่ 8 การคัดกรองโรคซึมเศร้า
                </Link><br/> <hr/>
                <Link to="/sec9">
                    ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ
                </Link><br/> <hr/>
                <Link to="/sec10">
                    ส่วนที่ 10 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
                </Link>
                
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
