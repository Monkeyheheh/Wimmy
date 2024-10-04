local logFilePath = "visitor_log.txt"

-- Function to log visitor information
local function logVisitor(ip, timestamp)
    local logFile = io.open(logFilePath, "a")  -- Open the log file in append mode
    if logFile then
        logFile:write(string.format("Visitor IP: %s, Timestamp: %s\n", ip, timestamp))
        logFile:close()
    else
        print("Error: Could not open log file.")
    end
end

-- Simulated visitor data (in a real scenario, you'd get this from the web server)
local function simulateVisitor(ip)
    local timestamp = os.date("%Y-%m-%d %H:%M:%S")  -- Get the current timestamp
    logVisitor(ip, timestamp)
end
