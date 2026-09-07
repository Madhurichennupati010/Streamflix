const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    service: "StreamFlix Backend",
    status: "UP",
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  healthCheck
};