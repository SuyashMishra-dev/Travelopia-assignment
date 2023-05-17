import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getData } from "../../api/get";
import { useState } from "react";
import { apiUrlConfig } from "../../api/config";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F6F643",
    color: theme.palette.common.black,
    fontWeight: 700,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#525A4D",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ViewAllSubmission() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    try {
      const result = await getData(apiUrlConfig.getAllSubmission);
      const tableData = result?.data?.data?.map((user, ind) => ({
        num: ind + 1,
        name: user.name,
        email: user.email,
        destination: user.destination,
        noOfTravelers: user.noOfTravelers,
        budgetPerPerson: user.budgetPerPerson,
      }));
      setData(tableData);
    } catch (error) {}
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div
        style={{
          color: "#F6F643",
          textAlign: "left",
          marginLeft: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Link style={{ color: "#F6F643" }} to="/">
          Create New
        </Link>
        <TableContainer component={Paper} sx={{ background: "#000" }}>
          <Table
            sx={{
              minWidth: 700,
              width: "80%",
              color: "#fff",
              margin: "2rem auto",
              border: "1px solid #F6F643",
            }}
            aria-label="customized table"
          >
            <TableHead sx={{ color: "#fff", background: "#F6F643" }}>
              <TableRow sx={{ color: "#fff", backgroundColor: "#F6F643" }}>
                <StyledTableCell>Seriol No.</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Destination</StyledTableCell>
                <StyledTableCell align="left">No. Of Travelers</StyledTableCell>
                <StyledTableCell align="left">
                  Per Person Budget
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "#fff" }}>
              {data.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#fff" }}
                  >
                    {row.num}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#fff" }}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#fff" }}>
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#fff" }}>
                    {row.destination}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#fff" }}>
                    {row.noOfTravelers}
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ color: "#fff" }}>
                    {row.budgetPerPerson}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
