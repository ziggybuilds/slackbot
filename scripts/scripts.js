module.exports = (robot) ->

  robot.hear /bb8/i, (res) ->
    robot.logger.debug "Received message #{res.message.text}"