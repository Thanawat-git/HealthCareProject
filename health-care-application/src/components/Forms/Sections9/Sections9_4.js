import React from 'react'

export default function Sections9_4() {
    return (
        <div className="css-form">
            <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
            <form>
                <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
                <div className="question">
                    <div className="col-md-8"></div>
                    <div className="col-md-4">
                    </div>
                            <div className="question each-question">

                                <div className="form-check form-check-inline">
                                    <div className="col-md-8 col-lg-8">
                                        <p>ท่านมีอาการปวดเข่าหรือไม่</p>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <input type="radio" value="Y" className="form-check-input" />
                                        <label htmlFor="Y" className="form-check-label">ใช่</label>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <input type="radio" value="N" className="form-check-input" />
                                        <label htmlFor="N" className="form-check-label">ไม่ใช่</label>
                                    </div>
                                </div>
                                
                                
                                <p>หากท่านมีอาการปวดเข่า/หรือเคยมี ขณะนี้ท่านมีระดับความเจ็บปวดของข้อเข่าอยู่ในระดับใด</p>
                                <div className="col-12">
                                        <input type="radio" value="level0" className="form-check-input" />
                                        <label htmlFor="level0" className="form-check-label">ระดับ 0 (ไม่เจ็บ)</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level1" className="form-check-input" />
                                        <label htmlFor="level1" className="form-check-label">ระดับ 1</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level2" className="form-check-input" />
                                        <label htmlFor="level2" className="form-check-label">ระดับ 2 (เจ็บเล็กน้อย)</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level3" className="form-check-input" />
                                        <label htmlFor="level3" className="form-check-label">ระดับ 3</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level4" className="form-check-input" />
                                        <label htmlFor="level4" className="form-check-label">ระดับ 4 (เจ็บปานกลาง)</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level5" className="form-check-input" />
                                        <label htmlFor="level5" className="form-check-label">ระดับ 5</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level6" className="form-check-input" />
                                        <label htmlFor="level6" className="form-check-label">ระดับ 6 (เจ็บมาก)</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level7" className="form-check-input" />
                                        <label htmlFor="level7" className="form-check-label">ระดับ 7</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level8" className="form-check-input" />
                                        <label htmlFor="level8" className="form-check-label">ระดับ 8 (เจ็บมากที่สุด)</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level9" className="form-check-input" />
                                        <label htmlFor="level9" className="form-check-label">ระดับ 9</label>
                                </div>

                                <div className="col-12">
                                        <input type="radio" value="level10" className="form-check-input" />
                                        <label htmlFor="level10" className="form-check-label">ระดับ 10 (เจ็บอย่างรุนแรง)</label>
                                </div>

                            </div>
                        
                </div>
                <div className="row justify-content-between">
                    <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
                    <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
                </div>
            </form>
        </div>
    );
}
