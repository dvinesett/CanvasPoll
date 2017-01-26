class StaticPagesController < ApplicationController
    def home
        %w(
        roles 
        lis_outcome_service_url 
        lis_result_sourcedid 
        lis_person_name_full 
        lis_person_contact_email_primary  
        launch_presentation_return_url
        ).each { |v| 
            session[v] ||= params[v] 
        }
        
        if session["roles"] == "Instructor" then
            render :teacher_home 
        else
            redirect_to student_polls_path
        end
    end
end
