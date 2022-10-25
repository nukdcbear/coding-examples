#! /usr/bin/env ruby

class App
  def columnalpha(column:)
    result = ''
    while column > 0
      result = ((column % 26 == 0 ? 26 : column % 26) + 64).chr + result
      column = (column - 1) / 26
    end
    puts result
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.columnalpha column: ARGV.first.to_i
end