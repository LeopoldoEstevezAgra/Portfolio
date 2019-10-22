<?php
namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends Controller
{
    /**
     *@Route ("/admin/projects",name="admin_projects") 
     */
    public function indexAction(Request $request)
    {
        $this->denyAccessUnlessGranted(["ROLE_ADMIN"]);

        return $this->render('admin/projects/index.html.twig', [
        ]);

    }

}