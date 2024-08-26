const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div style={{ zIndex: 1000 }} className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-700 focus:outline-none">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 ">Notifications</h2>
        {/* User Card Examples */}
        <div class="bg-white rounded-xl shadow-md overflow-hidden m-2">
          <div class="p-3 flex items-center">
            <div class="bg-blue-600 p-3 rounded-full text-center">
              <p class="text-2xl font-bold text-white">05</p>
            </div>
            <div class="ml-4">
              <div class="uppercase px-2 rounded-md text-white bg-green-400 font-semibold">
                Ravi B</div>
              <p class="mt-1 text-gray-600">Hey ! I</p>
              <p class="mt-1 text-gray-600">Group : B+</p>
              <p class="mt-1 font-semibold text-gray-600">B+</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden m-2">
          <div class="p-2 flex items-center">
            <div class="bg-blue-600 p-3 rounded-full text-center">
              <p class="text-2xl font-bold text-white">05</p>
            </div>
            <div class="ml-4">
              <div class="uppercase px-2 rounded-md text-white bg-green-400 font-semibold">
                Paid</div>
              <p class="mt-1 text-gray-600">DATE: 2024-07-25</p>
              <p class="mt-1 font-semibold text-gray-600">AMOUNT: Rs. 5000/-</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden m-2">
          <div class="p-2 flex items-center">
            <div class="bg-blue-600 p-3 rounded-full text-center">
              <p class="text-2xl font-bold text-white">05</p>
            </div>
            <div class="ml-4">
              <div class="uppercase px-2 rounded-md text-white bg-green-400 font-semibold">
                Paid</div>
              <p class="mt-1 text-gray-600">DATE: 2024-07-25</p>
              <p class="mt-1 font-semibold text-gray-600">AMOUNT: Rs. 5000/-</p>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Sidebar;
