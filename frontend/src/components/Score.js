import Nav from "./Nav";
import { useState,useEffect } from "react";

const Score = ({correctAnswerState,name}) => {
  const [users,setUsers] = useState([]);
  const correctAnswer = useState(()=> JSON.parse(localStorage.getItem("correctAnswer")) ?? 0);


  useEffect(() => {

    const  getUsers = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/leaderboard`);
        const jsonData = await response.json();
  
        setUsers(jsonData);
        console.log(users)
      } catch (err) {
        console.error(err.message);
      }
    };getUsers()
    
  }, []);



  const percentage = parseFloat(((parseInt(correctAnswer)/8)*100),1);
  return (
    users && 
    <div className="md:h-screen flex flex-col justify-center items-center ">
    <div className=" text-center flex flex-col justify-center items-center text-orange-200 bg-cover font-bold text-4xl  p-4 justify-left mt-20 ">
      Thank You {name} ! Your Result is : {percentage} %

      <h1 className="text-xl text-black mt-8"> Leaderboard </h1>

      <div class="flex flex-col mt-4">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Correct Answer
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Score
              </th>
            </tr>
          </thead>
          <tbody>

          {users?.map((user,index) => (
            <tr class="border-b" key={user._id}>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >{user.name}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >{user.correctAnswer}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {user.Score}
              </td>              
              <td>
              </td>
            </tr>
          ))}
            
          </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    
  )

    
  
};

export default Score;
