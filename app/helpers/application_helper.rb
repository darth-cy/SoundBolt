module ApplicationHelper
  
  def insert_authenticity_token
    html = "<input type='hidden' name='authenticity_token' value='form_authenticity_token'>"
    html.html_safe
  end
end
