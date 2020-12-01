import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function ShowResultDialog() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const forms2Reducer = useSelector(({ forms2Reducer }) => forms2Reducer);
    const forms3Reducer = useSelector(({ forms3Reducer }) => forms3Reducer);
    const forms4Reducer = useSelector(({ forms4Reducer }) => forms4Reducer);
    const forms5Reducer = useSelector(({ forms5Reducer }) => forms5Reducer);
    const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
    const forms7Reducer = useSelector(({ forms7Reducer }) => forms7Reducer);
    const forms8Reducer = useSelector(({ forms8Reducer }) => forms8Reducer);
    const forms89qReducer = useSelector(({ forms89qReducer }) => forms89qReducer);
    const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
    const forms92Reducer = useSelector(({ forms92Reducer }) => forms92Reducer);
    const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);
      
    return (
        <div>
            <Button variant="contained" size="large" color="primary" fullWidth onClick={handleClickOpen('paper')}>ดูผลการประเมิน</Button>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                scroll={scroll}
                className="dialog"
            >
                <DialogTitle className="dialog-title"> <strong>สรุปผลแบบประเมิน</strong> </DialogTitle>
                <DialogContent dividers={scroll === 'paper'} className="dialog-content">
                    {/* sec2 */}
                    <h4 >ผลการประเมินสภาวะสุขภาพ</h4>
                    <h5> แปลผลเส้นรอบเอว </h5>
                    <h6 >{forms2Reducer.waistResult}</h6>
                    <h5> แปลผลค่า BMI  </h5>
                    <h6>{forms2Reducer.bmiResult}</h6>
                    <h5> แปลผลความดันโลหิต  </h5>
                    <h6>{forms2Reducer.bloodPressureResult}</h6>
                    <h5> แปลผลการตรวจระดับน้ำตาล </h5>
                    <h6 >{forms2Reducer.sugarResult}</h6>
                    <hr/>
                    {/* sec3 */}
                    <h4>ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h4>
                    <h6>{forms3Reducer.results}</h6>
                    <hr/>
                    {/* sec4 */}
                    <h4 >ผลการประเมินสุขภาพตา</h4>
                    <h6> {forms4Reducer.results}  </h6>
                    <hr/>
                    {/* sec5 */}
                    <h4 >ผลการประเมินสุขภาพช่องปาก</h4>
                    <h6> {forms5Reducer.results}  </h6>
                    <hr/>
                    {/* sec6 */}
                    <h4 >ผลการประเมินความสามารถในการทำกิจวัตรประจำ</h4>
                    <h6> {forms6Reducer.resultsTai}  </h6>
                    <hr/>
                    {/* sec7 */}
                    <h4 >ผลการประเมินภาวะสมองเสื่อม</h4>
                    <h6> {forms7Reducer.results}  </h6>
                    <hr/>
                    {/* sec8 */}
                    <h4 >ผลการประเมินการคัดกรองโรคซึมเศร้า</h4>
                    <h6> {forms8Reducer.results}  </h6>
                    <h6> {forms89qReducer.results}  </h6>
                    <hr/>
                    {/* sec9 */}
                    <h4 >ผลการประเมินสุขภาพกระดูกและกล้ามเนื้อ</h4>
                    <h6> {forms9Reducer.result1}  </h6>
                    <h6> {forms9Reducer.result2}  </h6>
                    <h6> {forms92Reducer.results}  </h6>
                    <hr/>
                    {/* sec10 */}
                    <h4 >ผลการประเมินการคัดกรองการกลั้นปัสสาวะ</h4>
                    <h6> {forms10Reducer.results}  </h6>
                    <hr/>
                </DialogContent>
            </Dialog>
        </div>
    )
}
