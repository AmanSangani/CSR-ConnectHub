import React from 'react';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminAuth />} />
      </Routes>
    </>
  );
};

export default App;
