import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
import TodoTable from './TodoTable';


test('renders todotable', () =>{
    const row =[{
      desc: 'get coffee', date: '11.05.2022'
    }];
    render(<TodoTable todos={row}/>)
    const tableCell = screen.getByText(/get coffee/i);
    const wrongCell = screen.queryByText(/go to coffee/i)
    expect(tableCell).toBeInTheDocument();
    expect(wrongCell).not.toBeInTheDocument();
  })
  