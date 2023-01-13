import Nav from "./Nav";
import { useState, useEffect } from "react";

const Score = ({ correctAnswerState, name }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchfield, setSearchfield] = useState("");
  const [reloadCount, setReloadCount] = useState(
    JSON.parse(localStorage.getItem("reloadcount")) ?? 0
  );

  const correctAnswer = useState(
    () => JSON.parse(localStorage.getItem("correctAnswer")) ?? 0
  );

  useEffect(() => {
    localStorage.setItem("reloadcount", JSON.stringify(reloadCount));

    const getUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/leaderboard`);
        // const response = await fetch("http://localhost:3001/leaderboard");
        const jsonData = await response.json();

        setUsers(jsonData);
        console.log("user", users);
      } catch (err) {
        console.error(err.message);
      }
    };
    getUsers();

    const myTimeout = setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const reload = () => {
    window.location.reload(true);
    setReloadCount(reloadCount + 1);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const percentage = parseFloat((parseInt(correctAnswer) / 8) * 100, 1);
  return (
    users && (
      <div className="md:h-screen flex flex-col justify-center items-center ">
        {reloadCount !== 2 ? reload() : ""}
        <div className=" text-center flex flex-col justify-center items-center text-orange-200 bg-cover font-bold text-4xl  p-4 justify-left mt-20 ">
          Thank You {(name[0]).toUpperCase() + name.slice(1) } ! Your Result is : {percentage} %
          <h1 className="font-medium text-black mt-8">
            Top 5 All Time Leaderboard{" "}
          </h1>
          {loading ? (
            <div class="flex flex-col mt-4">
              <div className="px-5 py-4">
                <input
                  type="search"
                  class="w-3/4 pl-4 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-800 text-base font-normal"
                  placeholder="Filter leaderboard by name"
                  onChange={onSearchChange}
                ></input>
              </div>
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Rank
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Correct Answer
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Score
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers?.slice(0, 5).map((user, index) => (
                          <tr class="border-b" key={user._id}>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user === users[0] ? (
                                <> 🥇 </>
                              ) : user === users[1] ? (
                                <>🥈 </>
                              ) :  user == users[2] ? (
                                <>🥉 </>
                              ) : (
                                <></>
                              )}{" "}
                              {index + 1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              👤 {(user.name[0]).toUpperCase() + user.name.slice(1) }
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.correctAnswer>5? <>✅</>:<>❌</>}  {user.correctAnswer}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              🔢  {user.Score}
                            </td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    )
  );
};

export default Score;
