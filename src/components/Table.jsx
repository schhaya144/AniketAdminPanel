import React from "react";

function Table() {
  return (
    <>
      <section className="">
      <div className="container ">
        <div className="row">
          <h1 className="text-center text-white pt-4"> User Information </h1>
        </div>
        <div className="row mt-4">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th scope="col">Service Interested In</th>
                <th scope="col">Messsage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td> </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      </section>
    </>
  );
}

export default Table;
