import { QueryClient, QueryClientProvider } from 'react-query'; //მეოთხე ვერსიაზე სხვა ბიბლიოთეკას იყენებს და მიაქციეთ ყურადღება
import './App.css';
import Landing from "./Landing"

const queryClient = new QueryClient() // შევქმენით ახალი ობიექტი ბიბლიოთეკიდა

function App() {
  return (
    <div className='App'>
        <QueryClientProvider client={queryClient}> 
        {/* ინსტალაციის პროცესისთვის  მეათე ხაზი შეგიძლიათ დააკოპიროთ დოკუმენტაციიდან */}
          <Landing></Landing>
      </QueryClientProvider>
    </div>
    );
   
   
}

export default App;