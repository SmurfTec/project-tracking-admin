import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { useProjects } from 'src/Context/ProjectsContext';
import NewProject from 'src/Modals/NewProject';
import ConfirmDelete from 'src/Modals/DeleteProject';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);
  const { projects,createNewProject,deleteProject,updateProject:updateProjectFunction } = useProjects();

  const [isNewProjectDialogpen, setIsNewProjectDialogpen] = useState(false)
  const [isUpdateProjectOpen, setIsUpdateProjectOpen] = useState(false)
  const [updateProject,  setupdateProject] = useState()
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [deleteId, setDeleteId] = useState()

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: projects,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={15}>
        <Typography variant="h4">Projects</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={()=> {
          setIsNewProjectDialogpen(true)
        }}>
          New Project
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'description', label: 'Description' },
                  { id: 'milestone', label: 'Milestone' },
                  { id: 'status', label: 'Status', align: 'center' },
                  { id: 'number', label: 'Number', align: 'center' },
                  { id: 'duedate', label: 'Duedate', align: 'center' },
                  { id: 'created_at', label: 'Created Data' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      name={row.name}
                      milestone={row.milestone}
                      status={row.status}
                      number={row.number}
                      duedate={row.duedate}
                      description={row.description}
                      created_at={row.created_at}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      handleEdit={()=> {
                        setIsUpdateProjectOpen(true)
                        setupdateProject(row)
                      }}
                      handleDelete={()=> {
                        setIsDeleteOpen(true)
                        setDeleteId(row.id)
                      }}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        {
          isNewProjectDialogpen && 
          <NewProject
            title='New Project'
            handleSuccess={(data)=> {
              createNewProject(data , () => {
                setIsNewProjectDialogpen(false)
              })
            }}
            open={isNewProjectDialogpen} 
            handleClose={()=> {
              setIsNewProjectDialogpen(false)
            }} 
          />
        }
        {
          isUpdateProjectOpen && 
          <NewProject
            title='Update Project'
            handleSuccess={(data)=> {
              updateProjectFunction(updateProject.id, data , () => {
                setIsUpdateProjectOpen(false)
              })
            }}
            open={isUpdateProjectOpen} 
            handleClose={()=> {
              setIsUpdateProjectOpen(false)
            }} 
            data={updateProject}
            isUpdate
          />
        }
        {
          isDeleteOpen && 
          <ConfirmDelete
            title='Delete Project'
            handleSuccess={()=> {
              deleteProject(deleteId , () => {
                setIsDeleteOpen(false)
              })
            }}
            open={isDeleteOpen} 
            handleClose={()=> {
              setIsDeleteOpen(false)
            }} 
          />
        }
      </Card>
    </Container>
  );
}
