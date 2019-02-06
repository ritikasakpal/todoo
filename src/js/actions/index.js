import { db } from "../../firebase";

export function getTasks() {
  return function(dispatch) {
    db.collection("tasks").onSnapshot(
      { includeMetadataChanges: true },
      data => {
        var all = [];
        data.docs.forEach(element => {
          const task = element.data();
          all.push({ ...task, ...{ id: element.id } });
        });
        dispatch(SET_TASKS(all));
      }
    );
  };
}
export function addTask(newtitle, newdisc) {
  return function(dispatch) {
    db.collection("tasks")
      .get()
      .then(data => {
        var no = data.docs.length;
        db.collection("tasks")
          .doc((no + 1).toString())
          .set({
            title: newtitle,
            disc: newdisc,
            status: "active"
          });
      });
  };
}
export function Savetask(data) {
  return function(dispatch) {
    db.collection("tasks")
      .doc(data.no)
      .set({ disc: data.newdisc, title: data.newtitle }, { merge: true });
  };
}
export function markasDone(no) {
  return function(dispatch) {
    console.log(no);
    db.collection("tasks")
      .doc(no)
      .set(
        {
          status: "done"
        },
        { merge: true }
      )
      .then(() => {
        return db.collection("tasks").doc(no);
      })
      .then(data => {
        console.log(data);
      });
  };
}
export const SET_TASKS = data => {
  return { type: "SET_TASKS", payload: data };
};
