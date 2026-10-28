module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	    keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	    keywords.each do |keyword|
		    input = input.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
	    end

      input = input.gsub(/^.*\burl\b *= *\{https?:\/\/(?:www\.)?arxiv\.org\/abs\/.*$\n/i, '')
      input = input.gsub(/^(\s*title\s*=\s*\{)(.*)(\},?\s*)$/) do
        prefix, title, suffix = Regexp.last_match.captures
        "#{prefix}#{title.gsub(/[{}]/, '')}#{suffix}"
      end

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
