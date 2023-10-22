// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';
import { ProductList } from '@react-monorepo-nx-demo/products';
import { OrderList } from '@react-monorepo-nx-demo/orders';



export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title={''} />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
