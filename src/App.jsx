import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import GlobalModal from './component/modal.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState({});

  const deleteData = (id) => {
    let new_data = data.filter((item) => item.id !== id);
    setData([...new_data]);
  };

  const toggle = () => {
    setOpen(!open);
    setUpdate({});
  };

  const updateData = (item) => {
    setUpdate(item);
    setOpen(true);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-9 offset-1 my-2">
            <button className='btn btn-success' onClick={() => setOpen(true)}>
              Add Student
            </button>
          </div>
          <div className="col-md-10 offset-2">
            <div className="card shadow-lg">
              <div className="card-header bg-secondary text-white">
                <h3 className='text-center'>Student List</h3>
              </div>
              <div className="card-body p-0">
                <table className='table table-striped'>
                  <thead className='bg-dark text-white'>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>
                          <button
                            className='btn btn-danger btn-sm mx-2'
                            onClick={() => deleteData(item.id)}
                          >
                            Delete
                          </button>
                          <button
                            className='btn btn-warning btn-sm ml-2'
                            onClick={() => updateData(item)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <GlobalModal
          toggle={toggle}
          open={open}
          data={data}
          setData={setData}
          update={update}
        />
      </div>
    </>
  );
};

export default App;
