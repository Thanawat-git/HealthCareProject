import React from 'react';
// import Form from '../../Forms/Sections1/Pages1/Pages1'

export default function mainContent() {
  
  // const [showResults, setShowResults] = useState(false);
  // const onClick = () => setShowResults(true);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">หน้าแรก</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <section className="content">
        <div className="container-fluid">
          123
          {/* <input type="submit" value="Search" onClick={onClick} /> */}
          {/* { showResults ? <Form/> : null } */}
        </div>
      </section>

    </div>
  )
}

