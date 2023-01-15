import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { changePage } from '../redux/actions/characters';

interface PageType {
  page: number
}

const BasicPagination = ({ page }: PageType) => {
  const dispatch = useDispatch()

  const handleChange = (pageNum: number) => {
    dispatch(changePage(pageNum))

  }
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        shape="rounded"
        defaultPage={1}
        size="large"
        page={page}
        onChange={(event, pageNum = 1) => handleChange(pageNum)}
      />
    </Stack>
  );
}


export default BasicPagination;
