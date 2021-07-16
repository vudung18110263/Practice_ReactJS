import {useDispatch,useSelector} from 'react-redux'
import React, { useState } from 'react';
import Form from '../../components/UI/Form';
import ListUsers from '../../components/UI/ListUser';
import {findUsers} from '../../store/user'
import  tableStyle  from '../../assets/tableStyle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button,Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {deleteUser} from '../../store/user'
import {grayColor, whiteColor, hexToRgb, blackColor, dangerColor} from '../../assets/material-dashboard-react';
import {
    Redirect,
    useLocation
  } from "react-router-dom";

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 700,
    },
    button: {
        margin: theme.spacing(1),
        fontSize: "12px",
        fontWeight: "400",
        cursor: "pointer",
        color: whiteColor,
        backgroundColor:dangerColor[2], 
        "&:hover,&:focus": {
          color: whiteColor,
          backgroundColor: dangerColor[0],
          boxShadow:
            "0 14px 26px -12px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.42), 0 4px 23px 0px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.2)",
        },
      },
  }));

function UserManagerPage(props){
    const dispatch = useDispatch()
    const { user,isLogin,listUsers } = useSelector(state => state.user)
    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
      }
    let query= useQuery()
    const page= query.get('page') || 1
    const limit = query.get('limit') || 5


      
    const classes = useStyles();


    dispatch(findUsers(user,(page-1)*limit,limit))

    if (!isLogin || user!= "admin"){
        return(
            <Redirect to="/login"/>
        );
    }
    else {
        return(
            
            <>
            <Grid container spacing={3} style={{ marginTop:20}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Password</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listUsers != null ? 
                            <>
                                {listUsers.map((item,index)=>(
                                    <StyledTableRow  key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {item.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{item.name}</StyledTableCell>
                                        <StyledTableCell align="center">{item.password}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button 
                                                className={classes.button}
                                                color="secondary"
                                                onClick={(e)=>{dispatch(deleteUser(item.id,index))}}
                                            > 
                                                Delete 
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow >
                                ))}
                                </>
                            :<></>}
                        </TableBody>
                        <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={50}
                            rowsPerPage={limit}
                            page={page-1}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            // onPageChange={handleChangePage}
                            // onRowsPerPageChange={handleChangeRowsPerPage}
                            // ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            </>

        );


    }
    
}

export default UserManagerPage;