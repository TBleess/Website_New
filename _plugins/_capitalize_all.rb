
# From: http://stackoverflow.com/questions/21315732/capitalize-first-letter-of-each-word-with-liquid-syntax?answertab=votes#tab-top

require 'liquid'
require 'uri'

# Capitalize all words of the input
module CapitalizeAll
  def capitalize_all(words)
    temp = words.split(' ').map(&:capitalize).join(' ')
    temp = temp.gsub(/Gis/, 'GIS')
    temp = temp.gsub(/Acs/, 'ACS')
    return temp
  end
end

Liquid::Template.register_filter(CapitalizeAll)