import {useDispatch,useSelector} from 'react-redux'
import React, { useEffect,useState } from 'react';
// import Form from '../../components/UI/Form';
// import ListUsers from '../../components/UI/ListUser';
import PropTypes from 'prop-types';
import {findUsers} from '../../store/user'
// import  tableStyle  from '../../assets/tableStyle';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
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
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {deleteUser} from '../../store/user'
import {grayColor, whiteColor, hexToRgb, blackColor, dangerColor} from '../../assets/material-dashboard-react';
import {
    Redirect,
    useLocation,
    useHistory
  } from "react-router-dom";



function UserManagerPage(){
    const dispatch = useDispatch()
    const { user,isLogin,listUsers,userCount } = useSelector(state => state.user)

    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let history = useHistory();
    let query= useQuery()
    const [page,setPage]=useState(query.get('page') || 1) 
    const [limit,setLimit]=useState( query.get('limit') || 5)

    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
        console.log("newPage",newPage)
        setPage(newPage+1);
    };
    const handleChangeRowsPerPage = async(event) => {
        if(event.target.value == -1){
            setLimit(parseInt(userCount, 10));
            return
        }
        setLimit(parseInt(event.target.value, 10));
    };

    useEffect(()=>{
        history.push("/usermanager?page="+page+"&limit="+limit)
        dispatch(findUsers(user,(page-1)*limit,limit))
    },[page,limit])

    if (!isLogin || user !== "admin"){
        return(
            <Redirect to="/login"/>
        );
    }
    else {
        return(
            <>
            <Grid container spacing={3} xs={12}  style={{ marginTop:20}}>
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
                            count={userCount}
                            rowsPerPage={limit}
                            page={page-1}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
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
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: grayColor[2],
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
const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

export default UserManagerPage;