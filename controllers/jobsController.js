const createJob = async (req, res) => {
  res.send('create a job')
}
const deleteJob = async (req, res) => {
  res.send('delete a job')
}
const updateJob = async (req, res) => {
  res.send('update a job')
}
const showStats = async (req, res) => {
  res.send('show a stat')
}
const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
