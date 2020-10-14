import React from 'react'

export default function Sections9_3() {
    return (
        <div className="css-form">
            <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
            <form>
                <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
                <h4>ประเมินสมรรถภาพทางกาย</h4>
                <div className="question">
                    <div className="each-question">

                        <div className="form-check form-check-inline">
                            <div className="col-3 col-sm-3 col-md-4 col-lg-4">
                                <p>Time Up & Go</p>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <input type="text" name="min" className="form-control" />
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <p htmlFor="min">นาที</p>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <input type="text" name="sec" className="form-control" />
                            </div>
                            <div className="col-3 col-sm-3 col-md-2 col-lg-2">
                                <p htmlFor="sec">วินาที</p>
                            </div>

                        </div> 

                        <p>เสี่ยงต่อการพลัดตกหกล้มสูงจากการตรวจ Time Up & Go</p>
                        {/* <span>ผล</span> */}

                        <div className="row align-items-end">
                                <div className="col-md-3" />
                                <div className="col-md-2 col-sm-12 col-xs-12">
                                    <p><span>*</span>วันที่สำรวจ</p>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="col-md-4" />
                            </div>
                    </div>


                    <p>แปลผล:</p>
                </div>
                <div className="row justify-content-between">
                    <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
                    <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
                </div>
            </form>
        </div>
    );
}
