import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

public class menu {

    @PostMapping("/admin/saveMenu")
    public String saveMenu(@ModelAttribute("menu") Menu menu,
    @RequestParam("image") MultipartFile image) {
    // Process the image file
    // Save menu item to database
    // Redirect or return view name
    return "redirect:/menu/success"; // Assuming you have a success page to show
}
}








